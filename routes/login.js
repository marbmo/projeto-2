const { app } = require('../config');

app.get('/login', (request, response) => {
  response.send('Rota de login');
});

module.exports = app;