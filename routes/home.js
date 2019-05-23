const { app } = require('../config');

app.get('/', (request, response) => {
  if (request.session.currentUser) {
    if (request.session.currentUser.cnpj) {
      let userEscola = {};
        userEscola = request.session.currentUser;
      response.render('index', { userEscola });
    } else {
      let user = {};
        user = request.session.currentUser;
      response.render('index', { user });
    } 
  } else {
    response.render('index');
  }
});

module.exports = app;