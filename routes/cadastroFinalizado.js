const { app } = require('../config');

app.get('/cadastro-finalizado', (request, response) => {
  const user = request.session.currentUser;
  response.render('cadastro-finalizado', { user });
});

module.exports = app;