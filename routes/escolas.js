const { app, hbs, bodyParser } = require('../config');

const readEscola = require('../controller/escola/read');

app.get('/escolas', readEscola);

module.exports = app;