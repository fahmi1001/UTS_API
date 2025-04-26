const { gql } = require('apollo-server');

const pelangganTypeDefs = gql`
  type Pelanggan {
    id: ID!
    nama: String!
    email: String!
    telepon: String
  }

  extend type Query {
    semuaPelanggan: [Pelanggan]
    pelanggan(id: ID!): Pelanggan
  }

  extend type Mutation {
    tambahPelanggan(nama: String!, email: String!, telepon: String!): Pelanggan
    ubahPelanggan(id: ID!, nama: String!, email: String!, telepon: String!): String
    hapusPelanggan(id: ID!): String
  }
`;

module.exports = pelangganTypeDefs;
