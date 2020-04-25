import {
    MutationResolvers,
} from 'src/generated/graphql';


const testResolver: MutationResolvers['test'] = async (
    root,
    args,
    context,
    info,
): Promise<string> => {
    return args.foo
};

export default testResolver;
