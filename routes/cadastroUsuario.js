const { app } = require('../config');

app.get('/cadastro-usuario', (request, response) => {
  response.send('Rota de Cadastro de Usuários');
});

module.exports = app;