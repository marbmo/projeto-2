const EscolaModel = require('../../model/escolaModel');

const updateEscola = (request, response) => {
  escolaDoc = {
    $set: {
      cnpj: request.body.cnpj,
      name: request.body.nome,
      cep: request.body.cep,
      logradouro: request.body.end,
      bairro: request.body.bairro,
      numero: request.body.numero,
      cidade: request.body.cidade,
      estado: request.body.estado,
      periodo: request.body.periodo,
      alimentacao: request.body.alimentacao,
      linguas: request.body.linguas,
      faixa: request.body.faixa,
      atividades: request.body.atividades,
      material: request.body.material,
      metodologia: request.body.metodologia,
      pcd: request.body.pcd,
      sobre: request.body.sobre,
    },
    // $push: {
    //   users: request.body.users,
    // }
  }

  EscolaModel.updateOne({ _id: request.params.escolaId }, escolaDoc)
  .then(data => {
    response.redirect(`/perfil-escola/${request.params.escolaId}`);
  })
  .catch(error => {
    console.log(error);
  });
};

module.exports = updateEscola;