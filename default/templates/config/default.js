module.exports = {

  clientId: null,

  logPath: __dirname + '/../log',

  http: {
    port: process.env.PORT || 3000,
  },

  eadmin: {
    baseUrl: 'http://eadmin-api.ersinfotech.com',
  },

};
