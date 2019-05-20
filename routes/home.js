const { app } = require('../config');

app.get('/', (request, response) => {
  let user = {};
  if (request.session) {
    user = request.session.currentUser;
  }
  console.log(user);
  response.render('index', { user });
});

module.exports = app;