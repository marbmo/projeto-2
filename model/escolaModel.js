const mongoose = require('mongoose');

const { Schema } = mongoose;

const EscolaModel = mongoose.model('Escola', new Schema({
  cnpj: { type: String, unique: true },
  email: String,
  password: String,
  name: String,
  cep: Number,
  logradouro: String,
  bairro: String,
  numero: Number,
  cidade: String,
  estado: String,
  proposta: String,
  mensalidade: String,
  religiao: String,
  projetos: String,
  tecnologia: String,
  tags: String,
  termos: Boolean,
  noticias: Boolean,
}));

module.exports = EscolaModel;
