const { app } = require('../config');

const { buscaEscolas } = require('../controller/escola/read');

app.get('/busca', buscaEscolas);


module.exports = app;