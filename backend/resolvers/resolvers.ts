const { mergeResolvers } = require('@graphql-tools/merge');
const { authResolver } = require("./authResolver");

export const resolvers = [
    authResolver,
  ];
  
module.exports = mergeResolvers(resolvers);