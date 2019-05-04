const { app } = require('../config');

app.get('/cadastro-escola', (request, response) => {
  response.send('Rota de Cadastro de Escolas');
});

module.exports = app;