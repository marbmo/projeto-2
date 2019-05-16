const EscolaModel = require('../../model/escolaModel');

const readEscolas = (request, response) => {
  const allEscolas = EscolaModel.find()
  .then(data => {
    console.log(data);
    response.render('escolas', { data });
  })
  .catch (error => {
    console.log(error)
  });
};

module.exports = readEscolas;