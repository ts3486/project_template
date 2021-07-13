const { mergeTypeDefs } = require('@graphql-tools/merge');
const authTypes = require("./authTypes");

export const typeDefs = [
    authTypes,
  ];
  
  module.exports = mergeTypeDefs(typeDefs);