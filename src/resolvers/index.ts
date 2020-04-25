import { 
    // QueryResolvers,
    MutationResolvers,
 } from 'src/generated/graphql';
import test from './test';

// const Query: QueryResolvers = {
// };

const Mutation: MutationResolvers = {
    test,
}

export default {
    // Query,
    Mutation,
};
