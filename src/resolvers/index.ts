import { 
    // QueryResolvers,
    MutationResolvers,
 } from 'src/generated/graphql';
import markAsRecommended from './markAsRecommended';

// const Query: QueryResolvers = {
// };

const Mutation: MutationResolvers = {
    markAsRecommended,
}

export default {
    // Query,
    Mutation,
};
