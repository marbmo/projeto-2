const { app } = require('../config');

app.get('/', (request, response) => {
  if (request.session.currentUser) {
    let user = {};
    user = request.session.currentUser;
    console.log(user);
    response.render('index', { user });
  } else {
    response.render('index');
  }
});

module.exports = app;