const UsuarioModel = require('../../model/usuarioModel');

const bcrypt = require("bcrypt");
const bcryptSalt = 10;

const readLoginUser = (request, response, next) => {
  const theUsername = request.body.email;
  const thePassword = request.body.senha;

  if (theUsername === "" || thePassword === "") {
    response.render("login-usuario", {
      errorMessage: "Please enter both, username and password to sign up."
    });
    return;
  }

  UsuarioModel.findOne({ "email": theUsername })
  .then(user => {
    if (!user) {
      response.render("login-usuario", {
        errorMessage: "The username doesn't exist."
      });
      return;
    }
    if (bcrypt.compareSync(thePassword, user.password)) {
      // Save the login in the session!
      request.session.currentUser = user;
      // console.log(request);
      response.redirect("/");
    } else {
      response.render("login-usuario", {
        errorMessage: "Incorrect password"
      });
    }
  })
  .catch(error => {
    console.log(error);
  })
};

const readUser = (request, response) => {
  UsuarioModel.findOne({ _id: request.params.userId })
  .then(data => {
    let user = {};
    if (request.session) {
      user = request.session.currentUser;
    }
    dados = data.toObject();
    const dataNascimento = data.dataNascimento.split('/');
    dados.dataDia = dataNascimento[0];
    dados.dataMes = dataNascimento[1];
    dados.dataAno = dataNascimento[2];
    console.log(dados);
    response.render('usuario', { dados, user });
  })
  .catch(error => {
    console.log(error);
  });
};

module.exports = { 
  readLoginUser,
  readUser,
} 