const { app, hbs, bodyParser } = require('../config');

const { readUser } = require('../controller/user/read');
const updateUser = require('../controller/user/update');

app.get('/perfil/:userId', readUser);
app.post('/perfil/:userId', updateUser);

module.exports = app;