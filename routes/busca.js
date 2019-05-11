const { app } = require('../config');

app.get('/busca', (request, response) => {
  response.render('busca');
});

module.exports = app;