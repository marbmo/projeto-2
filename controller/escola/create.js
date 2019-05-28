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
    periodo: request.body.periodo,
    alimentacao: request.body.alimentacao,
    linguas: request.body.linguas,
    faixa: request.body.faixa,
    atividades: request.body.atividades,
    material: request.body.material,
    metodologia: request.body.metodologia,
    pcd: request.body.pcd,
    sobre: request.body.sobre,
    // users: user._id,
    termos: termos,
    noticias: noticias,
  };

  EscolaModel.findOne({ cnpj: escolaDoc.cnpj })
  .then(escola => {
    if (escola !== null) {
      const message = { message: "A escola já existe" }
      response.render("cadastro-escola", { message, user });
      return;
    }

    const newSchool = new EscolaModel(escolaDoc);

    newSchool.save((err, data) => {
      if (err) {
        console.log(err);
        response.render("cadastro-escola", { err , user });
      }
      console.log(data);
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