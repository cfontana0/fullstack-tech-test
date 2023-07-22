import { gql } from "@apollo/client";

export const GET_DRINKS = gql`
  query GetDrinks {
    drinks {
      name
      price
      img
    }
  }
`;

export const GET_CALCULATE_PRICE = gql`
  query CalculatePrice($drinks: [String!]!) {
    calculatePrice(drinks: $drinks) {
      total
      details {
        price
        bundle
      }
    }
  }
`;
