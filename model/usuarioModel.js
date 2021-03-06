const mongoose = require('mongoose');

const { Schema } = mongoose;

const UsuarioModel = mongoose.model('Usuario', new Schema({
  email: { type: String, unique: true },
  name: String,
  lastName: String,
  password: String,
  dataNascimento: String,
  school: Boolean,
  schoolId: String,
  termos: Boolean,
}));

module.exports = UsuarioModel;
