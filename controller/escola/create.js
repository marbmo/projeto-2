const EscolaModel = require('../../model/escolaModel');
const UsuarioModel = require('../../model/usuarioModel');

const createEscola = (request, response) => {
  user = request.session.currentUser;

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
    users: user._id,
    termos: termos,
    noticias: noticias,
  };

  EscolaModel.findOne({ cnpj: escolaDoc.cnpj })
  .then(escola => {
    if (escola !== null) {
      response.render("cadastro-escola", { message: "A escola já existe" });
      return;
    }

    const newSchool = new EscolaModel(escolaDoc);

    newSchool.save((err, data) => {
      if (err) {
        response.render("cadastro-escola", { message: "Something went wrong" });
      }
      UsuarioModel.updateOne({ _id: user._id }, { school: true , schoolId: data.id })
      .then(data => {
        response.redirect("/cadastro-finalizado");
      })
      .catch(err => {
        console.log(err);
      })
      
    });
  })
  .catch(error => {
    console.log(error)
  });

  // EscolaModel.create(escolaDoc, (error) => {
  //   if (error) {
  //     console.log(`Erro ao criar o documento: ${error}`);
  //     // response.render('criacaoerro');
  //   } else {
  //     console.log(`Salvamos o documento: ${escolaDoc.name}`);
  //     response.redirect('/cadastro-finalizado');
  //   }
  // });
};

module.exports = createEscola;