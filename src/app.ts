import express = require('express');
const app = express();
import routes from './routes/v1';

/**
 * @description Apollo
 **/

import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { UserResolver } from './modules/user/user.resolver';

const initGraphQL = async (app: Object) => {
  const schema = await buildSchema({
    resolvers: [UserResolver]
  });
  const apolloServer = new ApolloServer({ schema });
  apolloServer.applyMiddleware({ app });
};

app.use('/v1', routes);

initGraphQL(app);
export default app;
