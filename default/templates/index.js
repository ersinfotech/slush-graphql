const time = process.hrtime();

require('./init');
const config = require('config');
const moment = require('moment');
const numeral = require('numeral');
const logger = require('./common/helpers/logger');
const app = require('./http');

app.listen(config.http.port, () => {
  const diff = process.hrtime(time);
  const second = (diff[0] * 1e9 + diff[1]) / 1e9;
  logger.info(`http service is listening on port ${config.http.port} in ${process.env.NODE_ENV} mode used ${numeral(second).format('0.00')} seconds`);
});
