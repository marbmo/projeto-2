const { app } = require('../config');

app.get('/cadastro-finalizado', (request, response) => {
  response.send('Rota de Cadastro Finalizado');
});

module.exports = app;