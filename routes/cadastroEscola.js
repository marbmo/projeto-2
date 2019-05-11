const { app } = require('../config');

app.get('/cadastro-escola', (request, response) => {
  response.render('cadastro-escola');
});

module.exports = app;