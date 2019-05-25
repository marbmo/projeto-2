const { app } = require('../config');

app.get('/login-usuario', (request, response) => {
  response.render('login-usuario');
});

app.get('/login-escola', (request, response) => {
  response.render('login-escola');
});

const { readLoginUser } = require('../controller/user/read');

app.post("/login/usuario", readLoginUser);

module.exports = app;