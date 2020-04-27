import { MutationResolvers } from '../generated/graphql';
import { setDisplayState } from '../postgresClient';

const setDisplayStateResolver: MutationResolvers['setDisplayState'] = async (
    root,
    args,
    context,
    info,
): Promise<null> => {
    await setDisplayState(args.id, args.displayed);
    return null;
};

export default setDisplayStateResolver;
