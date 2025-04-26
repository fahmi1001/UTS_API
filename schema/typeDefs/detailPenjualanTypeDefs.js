const { gql } = require('apollo-server');

const detailPenjualanTypeDefs = gql`
  type DetailPenjualan {
    id: ID!
    penjualan_id: ID!
    barang_id: ID!
    jumlah: Int!
    harga_satuan: Float!
  }

  extend type Query {
    semuaDetailPenjualan: [DetailPenjualan]
    detailPenjualan(id: ID!): DetailPenjualan
  }

  extend type Mutation {
    tambahDetailPenjualan(penjualan_id: ID!, barang_id: ID!, jumlah: Int!, harga_satuan: Float!): DetailPenjualan
    ubahDetailPenjualan(id: ID!, penjualan_id: ID!, barang_id: ID!, jumlah: Int!, harga_satuan: Float!): DetailPenjualan
    hapusDetailPenjualan(id: ID!): String
  }
`;

module.exports = detailPenjualanTypeDefs;
