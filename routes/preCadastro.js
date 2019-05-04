const { app } = require('../config');

app.get('/pre-cadastro', (request, response) => {
  response.send('Rota de Pré Cadastro');
});

module.exports = app;