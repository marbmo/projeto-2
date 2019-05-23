const { app, hbs, bodyParser, bcrypt } = require('../config');

const createUser = require('../controller/user/create');

app.get('/cadastro-usuario', (request, response) => {
  response.render('cadastro-usuario');
});

app.post('/cadastro-usuario/create', createUser);

module.exports = app;