const { app, hbs, bodyParser } = require('../config');

const createUser = require('../controller/user/create');

app.get('/cadastro-usuario', (request, response) => {
  response.render('cadastro-usuario');
});

app.post('/cadastro/create', createUser);

module.exports = app;