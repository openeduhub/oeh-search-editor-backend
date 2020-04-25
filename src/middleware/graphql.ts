import { Router } from 'express';
import graphqlHTTP from 'express-graphql';
import { importSchema } from 'graphql-import';
import { makeExecutableSchema } from 'graphql-tools';
import * as path from 'path';
import resolvers from '../resolvers';
import { authenticate } from '../authenticate';

const typeDefs = importSchema(path.join(__dirname, '..', 'schema.graphql'));

const schema = makeExecutableSchema({ typeDefs, resolvers });

export const handleGraphQl = (router: Router) =>
    router.use('/graphql', (req, res) =>
        graphqlHTTP({
            schema,
            graphiql: true,
            context: { user: authenticate(req) },
        })(req, res),
    );
