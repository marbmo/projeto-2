const { app, hbs, bodyParser } = require('../config');

const { findEscolaPerfil } = require('../controller/escola/read');

app.get('/perfil-escola/:escolaId', findEscolaPerfil);
// app.post('/perfil-escola/:escolaId', updateEscola);

module.exports = app;