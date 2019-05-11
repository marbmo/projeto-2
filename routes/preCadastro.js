const { app } = require('../config');

app.get('/pre-cadastro', (request, response) => {
  response.render('pre-cadastro');
});

module.exports = app;