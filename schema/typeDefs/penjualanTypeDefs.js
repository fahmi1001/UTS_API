const { gql } = require('apollo-server');

const penjualanTypeDefs = gql`
  type Penjualan {
    id: ID!
    tanggal: String!
    pelanggan_id: ID!
    total: Float!
  }

  extend type Query {
    semuaPenjualan: [Penjualan]
    penjualan(id: ID!): Penjualan
  }

  extend type Mutation {
    tambahPenjualan(tanggal: String!, pelanggan_id: ID!, total: Float!): Penjualan
    ubahPenjualan(id: ID!, tanggal: String!, pelanggan_id: ID!, total: Float!): Penjualan
    hapusPenjualan(id: ID!): String
  }
`;

module.exports = penjualanTypeDefs;
