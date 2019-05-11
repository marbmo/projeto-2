const { app } = require('../config');

app.get('/login', (request, response) => {
  response.render('login');
});

module.exports = app;