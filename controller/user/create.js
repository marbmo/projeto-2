const UsuarioModel = require('../../model/usuarioModel');

const bcrypt = require("bcrypt");
const bcryptSalt = 10;

const createUser = (request, response) => {
  if (request.body.email === "" || request.body.senha === "") {
    response.render("cadastro-usuario", { message: "Indicate username and password" });
    return;
  }

  const date = request.body.dataDia + '/' + request.body.dataMes + '/' + request.body.dataAno;
  let termos = false;
  if (request.body['termos'] == 'on') {
    termos = true;
  };

  const userDoc = {
    name: request.body.nome,
    lastName: request.body.sobrenome,
    email: request.body.email,
    password: request.body.senha,
    termos: termos,
    dataNascimento: date,
  };

  UsuarioModel.findOne({ email: userDoc.email })
  .then(user => {
    if (user !== null) {
      response.render("cadastro-usuario", { message: "The username already exists" });
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(userDoc.password, salt);

    userDoc.password = hashPass;

    const newUser = new UsuarioModel(userDoc);

    console.log(userDoc);

    newUser.save((err) => {
      if (err) {
        response.render("cadastro-usuario", { message: "Something went wrong" });
      }
      response.redirect("/cadastro-finalizado");
    });
  })
  .catch(error => {
    console.log(error)
  });

  // UsuarioModel.create(userDoc, (error) => {
  //   if (error) {
  //     console.log(`Erro ao criar o documento: ${error}`);
  //     // response.render('criacaoerro');
  //   } else {
  //     console.log(`Salvamos o documento: ${userDoc.name}`);
  //     response.redirect('/cadastro-finalizado');
  //   }
  // });
};

module.exports = createUser;