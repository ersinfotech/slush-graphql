const config = require('config');
const restrict = require('@ersinfotech/restrict');

module.exports = restrict({
  baseUrl: config.eadmin.baseUrl,
});
