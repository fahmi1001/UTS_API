const barangResolvers = require('./barangResolvers');
const pelangganResolvers = require('./pelangganResolvers');
const penjualanResolvers = require('./penjualanResolvers');
const kategoriResolvers = require('./kategoriResolvers');
const detailPenjualanResolvers = require('./detailPenjualanResolvers');

// Gabungkan semua resolver
const resolvers = {
  Query: {
    ...barangResolvers.Query,
    ...pelangganResolvers.Query,
    ...penjualanResolvers.Query,
    ...kategoriResolvers.Query,
    ...detailPenjualanResolvers.Query,
  },
  Mutation: {
    ...barangResolvers.Mutation,
    ...pelangganResolvers.Mutation,
    ...penjualanResolvers.Mutation,
    ...kategoriResolvers.Mutation,
    ...detailPenjualanResolvers.Mutation,
  },
};

module.exports = resolvers;
