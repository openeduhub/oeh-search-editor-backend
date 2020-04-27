import { 
    // QueryResolvers,
    MutationResolvers,
 } from 'src/generated/graphql';
 import markAsRecommended from './markAsRecommended';
 import setDisplayState from './setDisplayState';

// const Query: QueryResolvers = {
// };

const Mutation: MutationResolvers = {
    markAsRecommended,
    setDisplayState
}

export default {
    // Query,
    Mutation,
};
