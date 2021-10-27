import {gql} from '@apollo/client';

export const GET_PLANETS = gql`
  query GetPLanets($planetID: ID!) {
    planet(planetID: $planetID) {
      name
      filmConnection {
        films {
          title
        }
      }
    }
  }
`;
