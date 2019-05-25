const mongoose = require('mongoose');

const { Schema } = mongoose;

const EscolaModel = mongoose.model('Escola', new Schema({
  cnpj: { type: String, unique: true },
  name: String,
  cep: Number,
  logradouro: String,
  bairro: String,
  numero: Number,
  cidade: String,
  estado: String,
  periodo: String,
  alimentacao: String,
  linguas: String,
  faixa: String,
  atividades: Boolean,
  material: Boolean,
  metodologia: String,
  pcd: Boolean,
  // proposta: String,
  // mensalidade: String,
  // religiao: String,
  // projetos: String,
  // tecnologia: String,
  sobre: String,
  tags: String,
  termos: Boolean,
  noticias: Boolean,
  users: String,
}));

module.exports = EscolaModel;
