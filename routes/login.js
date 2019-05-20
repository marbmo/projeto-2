const { app } = require('../config');

app.get('/login-usuario', (request, response) => {
  response.render('login-usuario');
});

app.get('/login-escola', (request, response) => {
  response.render('login-escola');
});

const readLoginUser = require('../controller/user/read');
const { readEscolaUser } = require('../controller/escola/read');

app.post('/login/escola', readEscolaUser);

app.post("/login/usuario", readLoginUser);

module.exports = app;