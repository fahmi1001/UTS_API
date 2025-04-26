const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schema/typeDefs');
const resolvers = require('./schema/resolvers');
const db = require('./db');

async function startServer() {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();
  server.applyMiddleware({ app });

  const PORT = 4000;
  app.listen(PORT, () => {
    console.log(`✅ Server ready at http://localhost:${PORT}${server.graphqlPath}`);
  });
}

startServer();
