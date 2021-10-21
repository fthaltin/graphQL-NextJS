const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    products: [Product!]!
  }

  type Product {
    productId: ID!
    image: ImageCustom!
    name: String!
    price: String!
    currency: String!
    cargo: Cargo!
  }

  type Cargo {
    isFree: Boolean!
    text: String
  }

  type ImageCustom {
    url: String!
    alt: String
  }
`;

module.exports = typeDefs;
