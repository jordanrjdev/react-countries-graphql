import { CountryContext } from '@/contexts/countryContext';
import { useContext, useEffect, useState } from 'react';
import {
  GetCountriesByContinentDocument,
  GetCountriesByContinentQuery,
  GetAllContriesQuery,
  GetAllContriesDocument,
  CountryFragment
} from '@/services/graphql';
import { client } from '@/services';
import { ApolloQueryResult } from '@apollo/client';
import useFilters from './useFilters';

const useCountries = () => {
  const { countries, setCountries, setCountriesFiltered, countriesFiltered } = useContext(CountryContext);
  const { applyFilters } = useFilters();

  useEffect(() => {
    let countriesFiltered: CountryFragment[] = applyFilters(countries);
    setCountriesFiltered(countriesFiltered);
  }, [countries]);

  const getAllCountries = async () => {
    try {
      const response: ApolloQueryResult<GetAllContriesQuery> = await client.query({
        query: GetAllContriesDocument
      });
      if (response.data.countries == null) return;
      setCountries(response.data.countries);
    } catch (error) {
      console.log(error);
    }
  };

  const applyChangeFilters = () => {
    let countriesFiltered: CountryFragment[] = [];
    countriesFiltered = applyFilters(countries);
    setTimeout(() => {
      setCountriesFiltered(countriesFiltered);
    }, 200);
  };

  const getCountriesByContinent = async (continents: string[]) => {
    try {
      const response: ApolloQueryResult<GetCountriesByContinentQuery> = await client.query({
        query: GetCountriesByContinentDocument,
        variables: { code: continents }
      });
      if (response.data.countries == null) return;
      setCountries(response.data.countries);
    } catch (e) {
      console.log(e);
    }
  };

  return { countries: countriesFiltered, applyChangeFilters, getAllCountries, getCountriesByContinent };
};

export default useCountries;
