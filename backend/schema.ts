import { makeExecutableSchema } from 'apollo-server-express';
import { mergeTypeDefs } from '@graphql-tools/merge';
import { mergeResolvers } from '@graphql-tools/merge';
//types
import { typeDefs as auth } from "./typeDefs/authTypes";
//resolvers
import { authResolver } from "./resolvers/authResolver";

const typeDefs = mergeTypeDefs([auth]);
const resolvers = mergeResolvers([authResolver])

export const Schema = makeExecutableSchema({
	typeDefs: typeDefs,
	resolvers: resolvers
});
