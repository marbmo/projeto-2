const { app, hbs, bodyParser } = require('../config');

const { findEscola } = require('../controller/escola/read');

app.get('/escola/:escolaId', findEscola);

module.exports = app;