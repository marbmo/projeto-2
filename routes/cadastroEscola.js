const { app, hbs, bodyParser } = require('../config');

app.get('/cadastro-escola', (request, response) => {
  response.render('cadastro-escola');
});

const createEscola = require('../controller/escola/create');

app.post('/cadastro/create', createEscola);

module.exports = app;