import { MutationResolvers } from '../generated/graphql';
import { markAsRecommended } from '../postgresClient';

const markAsRecommendedResolver: MutationResolvers['markAsRecommended'] = async (
    root,
    args,
    context,
    info,
): Promise<null> => {
    await markAsRecommended(args.id, args.value);
    return null;
};

export default markAsRecommendedResolver;
