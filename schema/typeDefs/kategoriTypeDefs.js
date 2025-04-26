const { gql } = require('apollo-server');

const kategoriTypeDefs = gql`
  type Kategori {
    id: ID!
    nama: String!
  }

  extend type Query {
    semuaKategori: [Kategori]
    kategori(id: ID!): Kategori
  }

  extend type Mutation {
    tambahKategori(nama: String!): Kategori
    ubahKategori(id: ID!, nama: String!): Kategori
    hapusKategori(id: ID!): String
  }
`;

module.exports = kategoriTypeDefs;
