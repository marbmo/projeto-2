const EscolaModel = require('../../model/escolaModel');

const createEscola = (request, response) => {
  let termos = false;
  if (request.body['termos'] == 'on') {
    termos = true;
  };

  let noticias = false;
  if (request.body['noticias'] == 'on') {
    noticias = true;
  };
  const escolaDoc = {
    cnpj: request.body.cnpj,
    name: request.body.nome,
    cep: request.body.cep,
    logradouro: request.body.end,
    bairro: request.body.bairro,
    numero: request.body.numero,
    cidade: request.body.cidade,
    estado: request.body.estado,
    proposta: request.body.proposta,
    mensalidade: request.body.mensalidade,
    religiao: request.body.religiao,
    projetos: request.body.projetos,
    tecnologia: request.body.tecnologia,
    // tags: String,
    termos: termos,
    noticias: noticias,
  };

  console.log(request.body);

  EscolaModel.create(escolaDoc, (error) => {
    if (error) {
      console.log(`Erro ao criar o documento: ${error}`);
      // response.render('criacaoerro');
    } else {
      console.log(`Salvamos o documento: ${escolaDoc.name}`);
      response.redirect('/cadastro-finalizado');
    }
  });
};

module.exports = createEscola;