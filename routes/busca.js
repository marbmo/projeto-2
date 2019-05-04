const { app } = require('../config');

app.get('/busca', (request, response) => {
  response.send('Rota de Busca');
});

module.exports = app;