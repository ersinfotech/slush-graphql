require('../init');
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const cors = require('cors');
const logger = require(__base + '/common/helpers/logger');
const routes = require('./routes');

const app = module.exports = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(multer().any());
app.use(routes);
app.use((err, req, res, next) => {
  res.status(500);
  process.env.NODE_ENV === 'production'
    ? res.send({error: err.message})
    : res.send({error: err.message, stack: err.stack});
});

process.on('uncaughtException', (err) => {
  logger.fatal(err);
  process.exit();
});
