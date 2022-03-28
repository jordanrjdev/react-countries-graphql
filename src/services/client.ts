import { ApolloClient, InMemoryCache } from '@apollo/client'

const baseUrl = "https://countries.trevorblades.com";

export const client = new ApolloClient({
  uri: `${baseUrl}/graphql`,
  cache: new InMemoryCache({
    typePolicies: {
      Country: {
        keyFields: ['code']
      },
      Query: {
        fields: {
          country: {
            read(_, { args, toReference }) {
              return toReference({
                __typename: 'Country',
                code: args?.code,
              })
            },
          },
        },
      },
    },
  }),
})

