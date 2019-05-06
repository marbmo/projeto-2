const mongoose = require('mongoose');

const { Schema } = mongoose;

const UsuarioModel = mongoose.model('Person', new Schema({
  email: { type: String, unique: true },
  name: String,
  lastName: String,
  dataNascimento: Date,
  termos: Boolean,
}));

module.exports = UsuarioModel;
