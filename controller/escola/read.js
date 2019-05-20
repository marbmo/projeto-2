const EscolaModel = require('../../model/escolaModel');
const RatingModel = require('../../model/ratingModel');

const buscaEscolas = (request, response) => {
  if (request.query.q) {
    EscolaModel.find({ name: { $regex: request.query.q, $options: 'i'} })
    .then(data => {
      console.log(data);
      response.render('busca', { data });
    })
    .catch (error => {
      console.log(error)
    });
  } else {
    response.render('busca');
  }
};

const findEscola = (request, response) => {
  EscolaModel.findOne({ _id: request.params.escolaId })
  .then(data => {
    let user = {};
    if (request.session) {
      user = request.session.currentUser;
    }

    RatingModel.find({ "schoolId": data._id })
    .then(aval => {
      const dados = { data, user, aval };
      response.render('escola', dados);
    })
    .catch (error => {
      console.log(error)
    });
  })
  .catch (error => {
    console.log(error)
  });
};

const bcrypt = require("bcrypt");
const bcryptSalt = 10;

const readEscolaUser = (request, response, next) => {
  const theUsername = request.body.email;
  const thePassword = request.body.senha;

  if (theUsername === "" || thePassword === "") {
    response.render("login-escola", {
      errorMessage: "Please enter both, username and password to sign up."
    });
    return;
  }

  EscolaModel.findOne({ "email": theUsername })
  .then(user => {
      if (!user) {
        response.render("login-escola", {
          errorMessage: "The username doesn't exist."
        });
        return;
      }
      if (bcrypt.compareSync(thePassword, user.password)) {
        // Save the login in the session!
        request.session.currentUser = user;
        console.log(request.session.currentUser);
        response.redirect("/");
      } else {
        response.render("login-escola", {
          errorMessage: "Incorrect password"
        });
        console.log('entrou');
      }
  })
  .catch(error => {
    console.log(error);
  })
};

module.exports = {
  buscaEscolas,
  readEscolaUser,
  findEscola,
}