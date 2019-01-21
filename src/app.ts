import express = require('express');
const app = express();
import routes from './routes/v1';

/**
 * @description Apollo
 **/

import { ApolloServer } from 'apollo-server-express';
import { buildSchema, Resolver, Query } from 'type-graphql';

@Resolver()
class HelloResolver {
  @Query(() => String)
  async hello() {
    return 'Hello world !';
  }
}

const initGraphQL = async (app: Object) => {
  const schema = await buildSchema({
    resolvers: [HelloResolver]
  });
  const apolloServer = new ApolloServer({ schema });
  apolloServer.applyMiddleware({ app });
};

app.set('port', process.env.PORT);
app.use('/v1', routes);

initGraphQL(app);
export default app;
