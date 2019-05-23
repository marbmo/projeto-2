const EscolaModel = require('../../model/escolaModel');

const bcrypt = require("bcrypt");
const bcryptSalt = 10;

const createEscola = (request, response) => {
  if (request.body.email === "" || request.body.senha === "") {
    response.render("cadastro-escola", { message: "Indicate username and password" });
    return;
  }

  let termos = false;
  if (request.body['termos'] == 'on') {
    termos = true;
  };

  let noticias = false;
  if (request.body['noticias'] == 'on') {
    noticias = true;
  };

  const escolaDoc = {
    email: request.body.email,
    password: request.body.senha,
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

  EscolaModel.findOne({$or: [{ cnpj: escolaDoc.cnpj }, { email: escolaDoc.email }]})
  .then(escola => {
    if (escola !== null) {
      response.render("cadastro-escola", { message: "The username already exists" });
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(escolaDoc.password, salt);

    escolaDoc.password = hashPass;

    const newSchool = new EscolaModel(escolaDoc);

    console.log(escolaDoc);

    newSchool.save((err) => {
      if (err) {
        response.render("cadastro-escola", { message: "Something went wrong" });
      }
      response.redirect("/cadastro-finalizado");
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