const mongoose = require('mongoose');

const { Schema } = mongoose;

const EscolaModel = mongoose.model('Person', new Schema({
  cnpj: { type: String, unique: true },
  name: String,
  cep: Number,
  logradouro: String,
  bairro: String,
  numero: Number,
  cidade: String,
  estado: String,
  pergunta1: String,
  pergunta2: String,
  pergunta3: String,
  pergunta4: String,
  pergunta5: String,
  tags: String,
  termos: Boolean,
  noticias: Boolean,
}));

module.exports = EscolaModel;
