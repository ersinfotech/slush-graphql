const path = require('path');
const graphql = require('graphql');

global.__base = path.normalize(__dirname + '/..');
global.GraphqlSchema = global.GraphQLSchema = graphql.GraphQLSchema;
global.GraphqlObjectType = global.GraphQLObjectType = graphql.GraphQLObjectType;
global.GraphqlList = global.GraphQLList = graphql.GraphQLList;
global.GraphqlNonNull = global.GraphQLNonNull = graphql.GraphQLNonNull;
global.GraphqlUnionType = global.GraphQLUnionType = graphql.GraphQLUnionType;
global.GraphqlInterfaceType = global.GraphQLInterfaceType = graphql.GraphQLInterfaceType;
global.GraphqlEnumType = global.GraphQLEnumType = graphql.GraphQLEnumType;
global.GraphqlInt = global.GraphQLInt = graphql.GraphQLInt;
global.GraphqlFloat = global.GraphQLFloat = graphql.GraphQLFloat;
global.GraphqlString = global.GraphQLString = graphql.GraphQLString;
global.GraphqlBoolean = global.GraphQLBoolean = graphql.GraphQLBoolean;
global.GraphqlID = global.GraphQLID = graphql.GraphQLID;
