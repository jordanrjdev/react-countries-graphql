import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  _Any: any;
};

export type Continent = {
  __typename?: 'Continent';
  code: Scalars['ID'];
  countries: Array<Country>;
  name: Scalars['String'];
};

export type ContinentFilterInput = {
  code?: InputMaybe<StringQueryOperatorInput>;
};

export type Country = {
  __typename?: 'Country';
  capital?: Maybe<Scalars['String']>;
  code: Scalars['ID'];
  continent: Continent;
  currency?: Maybe<Scalars['String']>;
  emoji: Scalars['String'];
  emojiU: Scalars['String'];
  languages: Array<Language>;
  name: Scalars['String'];
  native: Scalars['String'];
  phone: Scalars['String'];
  states: Array<State>;
};

export type CountryFilterInput = {
  code?: InputMaybe<StringQueryOperatorInput>;
  continent?: InputMaybe<StringQueryOperatorInput>;
  currency?: InputMaybe<StringQueryOperatorInput>;
};

export type Language = {
  __typename?: 'Language';
  code: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  native?: Maybe<Scalars['String']>;
  rtl: Scalars['Boolean'];
};

export type LanguageFilterInput = {
  code?: InputMaybe<StringQueryOperatorInput>;
};

export type Query = {
  __typename?: 'Query';
  _entities: Array<Maybe<_Entity>>;
  _service: _Service;
  continent?: Maybe<Continent>;
  continents: Array<Continent>;
  countries: Array<Country>;
  country?: Maybe<Country>;
  language?: Maybe<Language>;
  languages: Array<Language>;
};


export type Query_EntitiesArgs = {
  representations: Array<Scalars['_Any']>;
};


export type QueryContinentArgs = {
  code: Scalars['ID'];
};


export type QueryContinentsArgs = {
  filter?: InputMaybe<ContinentFilterInput>;
};


export type QueryCountriesArgs = {
  filter?: InputMaybe<CountryFilterInput>;
};


export type QueryCountryArgs = {
  code: Scalars['ID'];
};


export type QueryLanguageArgs = {
  code: Scalars['ID'];
};


export type QueryLanguagesArgs = {
  filter?: InputMaybe<LanguageFilterInput>;
};

export type State = {
  __typename?: 'State';
  code?: Maybe<Scalars['String']>;
  country: Country;
  name: Scalars['String'];
};

export type StringQueryOperatorInput = {
  eq?: InputMaybe<Scalars['String']>;
  glob?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['String']>;
};

export type _Entity = Continent | Country | Language;

export type _Service = {
  __typename?: '_Service';
  /** The sdl representing the federated service capabilities. Includes federation directives, removes federation types, and includes rest of full schema after schema directives have been applied */
  sdl?: Maybe<Scalars['String']>;
};

export type CountryFragment = { __typename?: 'Country', code: string, name: string, capital?: string | null, emoji: string, currency?: string | null, languages: Array<{ __typename?: 'Language', name?: string | null, code: string }>, continent: { __typename?: 'Continent', name: string, code: string } };

export type GetAllContriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllContriesQuery = { __typename?: 'Query', countries: Array<{ __typename?: 'Country', code: string, name: string, capital?: string | null, emoji: string, currency?: string | null, languages: Array<{ __typename?: 'Language', name?: string | null, code: string }>, continent: { __typename?: 'Continent', name: string, code: string } }> };

export type GetCountriesByContinentQueryVariables = Exact<{
  code: Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>;
}>;


export type GetCountriesByContinentQuery = { __typename?: 'Query', countries: Array<{ __typename?: 'Country', code: string, name: string, capital?: string | null, emoji: string, currency?: string | null, languages: Array<{ __typename?: 'Language', name?: string | null, code: string }>, continent: { __typename?: 'Continent', name: string, code: string } }> };

export type GetCountryQueryVariables = Exact<{
  code: Scalars['ID'];
}>;


export type GetCountryQuery = { __typename?: 'Query', country?: { __typename?: 'Country', code: string, name: string, capital?: string | null, emoji: string, currency?: string | null, languages: Array<{ __typename?: 'Language', name?: string | null, code: string }>, continent: { __typename?: 'Continent', name: string, code: string } } | null };

export type GetAllContinentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllContinentsQuery = { __typename?: 'Query', continents: Array<{ __typename?: 'Continent', code: string, name: string }> };

export const CountryFragmentDoc = gql`
    fragment Country on Country {
  code
  name
  capital
  emoji
  currency
  languages {
    name
    code
  }
  continent {
    name
    code
  }
}
    `;
export const GetAllContriesDocument = gql`
    query GetAllContries {
  countries {
    ...Country
  }
}
    ${CountryFragmentDoc}`;

/**
 * __useGetAllContriesQuery__
 *
 * To run a query within a React component, call `useGetAllContriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllContriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllContriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllContriesQuery(baseOptions?: Apollo.QueryHookOptions<GetAllContriesQuery, GetAllContriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllContriesQuery, GetAllContriesQueryVariables>(GetAllContriesDocument, options);
      }
export function useGetAllContriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllContriesQuery, GetAllContriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllContriesQuery, GetAllContriesQueryVariables>(GetAllContriesDocument, options);
        }
export type GetAllContriesQueryHookResult = ReturnType<typeof useGetAllContriesQuery>;
export type GetAllContriesLazyQueryHookResult = ReturnType<typeof useGetAllContriesLazyQuery>;
export type GetAllContriesQueryResult = Apollo.QueryResult<GetAllContriesQuery, GetAllContriesQueryVariables>;
export const GetCountriesByContinentDocument = gql`
    query GetCountriesByContinent($code: [String]!) {
  countries(filter: {continent: {in: $code}}) {
    ...Country
  }
}
    ${CountryFragmentDoc}`;

/**
 * __useGetCountriesByContinentQuery__
 *
 * To run a query within a React component, call `useGetCountriesByContinentQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCountriesByContinentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCountriesByContinentQuery({
 *   variables: {
 *      code: // value for 'code'
 *   },
 * });
 */
export function useGetCountriesByContinentQuery(baseOptions: Apollo.QueryHookOptions<GetCountriesByContinentQuery, GetCountriesByContinentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCountriesByContinentQuery, GetCountriesByContinentQueryVariables>(GetCountriesByContinentDocument, options);
      }
export function useGetCountriesByContinentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCountriesByContinentQuery, GetCountriesByContinentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCountriesByContinentQuery, GetCountriesByContinentQueryVariables>(GetCountriesByContinentDocument, options);
        }
export type GetCountriesByContinentQueryHookResult = ReturnType<typeof useGetCountriesByContinentQuery>;
export type GetCountriesByContinentLazyQueryHookResult = ReturnType<typeof useGetCountriesByContinentLazyQuery>;
export type GetCountriesByContinentQueryResult = Apollo.QueryResult<GetCountriesByContinentQuery, GetCountriesByContinentQueryVariables>;
export const GetCountryDocument = gql`
    query GetCountry($code: ID!) {
  country(code: $code) {
    ...Country
  }
}
    ${CountryFragmentDoc}`;

/**
 * __useGetCountryQuery__
 *
 * To run a query within a React component, call `useGetCountryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCountryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCountryQuery({
 *   variables: {
 *      code: // value for 'code'
 *   },
 * });
 */
export function useGetCountryQuery(baseOptions: Apollo.QueryHookOptions<GetCountryQuery, GetCountryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCountryQuery, GetCountryQueryVariables>(GetCountryDocument, options);
      }
export function useGetCountryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCountryQuery, GetCountryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCountryQuery, GetCountryQueryVariables>(GetCountryDocument, options);
        }
export type GetCountryQueryHookResult = ReturnType<typeof useGetCountryQuery>;
export type GetCountryLazyQueryHookResult = ReturnType<typeof useGetCountryLazyQuery>;
export type GetCountryQueryResult = Apollo.QueryResult<GetCountryQuery, GetCountryQueryVariables>;
export const GetAllContinentsDocument = gql`
    query GetAllContinents {
  continents {
    code
    name
  }
}
    `;

/**
 * __useGetAllContinentsQuery__
 *
 * To run a query within a React component, call `useGetAllContinentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllContinentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllContinentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllContinentsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllContinentsQuery, GetAllContinentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllContinentsQuery, GetAllContinentsQueryVariables>(GetAllContinentsDocument, options);
      }
export function useGetAllContinentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllContinentsQuery, GetAllContinentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllContinentsQuery, GetAllContinentsQueryVariables>(GetAllContinentsDocument, options);
        }
export type GetAllContinentsQueryHookResult = ReturnType<typeof useGetAllContinentsQuery>;
export type GetAllContinentsLazyQueryHookResult = ReturnType<typeof useGetAllContinentsLazyQuery>;
export type GetAllContinentsQueryResult = Apollo.QueryResult<GetAllContinentsQuery, GetAllContinentsQueryVariables>;