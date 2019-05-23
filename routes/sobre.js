const { app, hbs, bodyParser } = require('../config');

app.get('/sobre', (request, response) => {
  if (request.session.currentUser) {
    if (request.session.currentUser.cnpj) {
      let userEscola = {};
        userEscola = request.session.currentUser;
      response.render('sobre', { userEscola });
    } else {
      let user = {};
        user = request.session.currentUser;
      response.render('sobre', { user });
    } 
  } else {
    response.render('sobre');
  }
});