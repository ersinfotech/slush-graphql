const express = require('express');
const graphql = require('express-graphql');
const restrict = require(__base + '/http/middlewares/restrict');
const schema = require('./graphql/schema');
const graphqlAuth = require('./graphql/auth');

const app = module.exports = express.Router();

app.route('/graphql/login')
.get(graphqlAuth.get)
.post(graphqlAuth.post);

app.use('/graphql', restrict(), graphql((req) => ({
  schema: schema,
  context: {
    session: req.session,
    req,
  },
  graphiql: true,
  formatError: process.env.NODE_ENV === 'production'
    ? (error) => ({message: error.message})
    : (error) => ({message: error.message, stack: error.stack}),
})));

