const EscolaModel = require('../../model/escolaModel');

const updateUser = (request, response) => {
  escolaDoc = {
    $set: {
      cnpj: request.body.cnpj,
      name: request.body.nome,
      cep: request.body.cep,
      logradouro: request.body.logradouro,
      bairro: request.body.bairro,
      numero: request.body.numero,
      cidade: request.body.cidade,
      estado: request.body.estado,
      proposta: request.body.proposta,
      mensalidade: request.body.mensalidade,
      religiao: request.body.religiao,
      tecnologia: request.body.tecnologia,
    },
    $push: {
      users: request.body.users,
    }
  }

  EscolaModel.updateOne({ _id: request.params.userId }, userDoc)
  .then(data => {
    response.redirect('/perfil/:userId', { data });
  })
  .catch(error => {
    console.log(error);
  });
};

module.exports = updateUser;