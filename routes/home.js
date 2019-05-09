const { app } = require('../config');

app.get('/', (request, response) => {
  response.render('index');
});

module.exports = app;