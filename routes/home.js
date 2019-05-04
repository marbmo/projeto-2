const { app } = require('../config');

app.get('/', (request, response) => {
  response.send('Rota da home');
});

module.exports = app;