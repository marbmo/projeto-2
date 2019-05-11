const { app } = require('../config');

app.get('/cadastro-finalizado', (request, response) => {
  response.render('cadastro-finalizado');
});

module.exports = app;