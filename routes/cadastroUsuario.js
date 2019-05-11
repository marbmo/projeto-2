const { app } = require('../config');

app.get('/cadastro-usuario', (request, response) => {
  response.render('cadastro-usuario');
});

module.exports = app;