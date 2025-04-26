const { gql } = require('apollo-server');

const barangTypeDefs = require('./barangTypeDefs');
const kategoriTypeDefs = require('./kategoriTypeDefs');
const pelangganTypeDefs = require('./pelangganTypeDefs');
const penjualanTypeDefs = require('./penjualanTypeDefs');
const detailPenjualanTypeDefs = require('./detailPenjualanTypeDefs');

// type Query dan Mutation utama dulu (wajib buat "extend" jalan)
const baseTypeDefs = gql`
  type Query
  type Mutation
`;

module.exports = [
  baseTypeDefs,
  barangTypeDefs,
  kategoriTypeDefs,
  pelangganTypeDefs,
  penjualanTypeDefs,
  detailPenjualanTypeDefs
];
