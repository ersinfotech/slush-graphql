const bunyan = require('bunyan');
const config = require('config');
const packageJson = require(__base + '/package.json');

module.exports = bunyan.createLogger({
  name: config.clientId || packageJson.name,
  streams: process.env.NODE_ENV === 'production'
    ? [{stream: process.stdout}, {path: config.logPath}]
    : [{stream: process.stdout}],
});
