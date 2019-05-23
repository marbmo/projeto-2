const UsuarioModel = require('../../model/usuarioModel');
const EscolaModel = require('../../model/escolaModel');

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
  if (request.session.currentUser.cnpj) {
    EscolaModel.findOne({ _id: request.params.userId })
    .then(data => {
      let userEscola = {};
      if (request.session) {
        userEscola = request.session.currentUser;
      }
      response.render('usuario', { data, userEscola });
    })
    .catch(error => {
      console.log(error);
    });
  } else {
    UsuarioModel.findOne({ _id: request.params.userId })
    .then(data => {
      let user = {};
      if (request.session) {
        user = request.session.currentUser;
      }
      response.render('usuario', { data, user });
    })
    .catch(error => {
      console.log(error);
    });
  }
};

module.exports = { 
  readLoginUser,
  readUser,
} 