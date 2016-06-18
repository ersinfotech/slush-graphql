const config = require('config');
const request = require('superagent');

exports.get = (req, res) => {
  res.sendFile(__dirname + '/login.html');
}

exports.post = (req, res, next) => {
  const {email, password} = req.body;

  request.post(config.eadmin.baseUrl + '/oauth/signin')
  .send({
    client_id: config.clientId,
    email: email,
    password: password,
  })
  .endAsync()
  .then((response) => {
    res.redirect(`/graphql?access_token=${response.body.access_token}`);
  })
  .catch(() => {
    next(new Error('login fail'));
  });
}
