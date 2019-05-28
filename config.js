const express = require('express');

const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const app = express();
const hbs = require('hbs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const multer  = require('multer');

require("dotenv").config();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/partials');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({
  secret: "basic-auth-secret",
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 600000 },
  rolling: true,
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    ttl: 24 * 60 * 60
  })
}));

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
  multer,
  session
};
