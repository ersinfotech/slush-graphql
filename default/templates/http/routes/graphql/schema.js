
module.exports = new GraphqlSchema({
  query: new GraphqlObjectType({
    name: 'Query',
    fields: () => ({
      hello: require('./queries/hello'),
    }),
  }),
});
