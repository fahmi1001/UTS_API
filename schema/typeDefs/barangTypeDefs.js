const { gql } = require('apollo-server');

const barangTypeDefs = gql`
  type Barang {
    id: ID!
    nama: String!
    harga: Float!
    stok: Int!
    kategori_id: ID!
  }

  extend type Query {
    semuaBarang: [Barang]
    barang(id: ID!): Barang
  }

  extend type Mutation {
    tambahBarang(nama: String!, harga: Float!, stok: Int!, kategori_id: ID!): Barang
    ubahBarang(id: ID!, nama: String!, harga: Float!, stok: Int!, kategori_id: ID!): Barang
    hapusBarang(id: ID!): String
  }
`;

module.exports = barangTypeDefs;
