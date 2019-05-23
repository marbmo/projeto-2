const { app, hbs, bodyParser } = require('../config');

const { readUser } = require('../controller/user/read');

app.get('/perfil/:userId', readUser);

module.exports = app;