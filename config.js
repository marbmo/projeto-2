const express = require('express');

const app = express();
const hbs = require('hbs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');

require("dotenv").config();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/partials');

app.use(bodyParser.urlencoded({ extended: false }));

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI, (error) => {
  if (error) {
    console.log('Não consegui conectar');
  } else {
    console.log('CONECTAMOS');
  }
});

module.exports = {
  app,
  hbs,
  bodyParser,
  mongoose,
  session
};
