const { app, hbs, bodyParser } = require('../config');

app.get('/cadastro-escola', (request, response) => {
  user = request.session.currentUser;
  response.render('cadastro-escola', { user });
});

const createEscola = require('../controller/escola/create');

app.post('/cadastro-escola/create', createEscola);

module.exports = app;