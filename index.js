const { ApolloServer, gql } = require('apollo-server');
import typeDefs from './schema/schema'
import resolvers from './resolver/resolver'
import db from './db/db'

async function healthCheck() {
    try { 
        await db.authenticate();
        console.log('Connected to database')
      } catch (err) { 
        console.log('Failed to connect to database: ' + err)
      }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  healthCheck();
  console.log(`🚀 Server ready at ${url}`);
});