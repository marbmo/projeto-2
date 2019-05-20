const { app, hbs, bodyParser } = require('../config');

const createRating = require('../controller/rating/create');

app.post('/escola/avaliacao/:schoolId', createRating);

module.exports = app;