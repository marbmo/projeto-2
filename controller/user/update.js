const UsuarioModel = require('../../model/usuarioModel');

const bcrypt = require("bcrypt");
const bcryptSalt = 10;

const updateUser = (request, response) => {
  const date = request.body.dataDia + '/' + request.body.dataMes + '/' + request.body.dataAno;
  
  let userDoc = {
    email: request.body.email,
    name: request.body.nome,
    lastName: request.body.sobrenome,
    dataNascimento: date,
  };

  if (request.body.senha != '') {
    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(request.body.senha, salt);

    userDoc.password = hashPass;
  }

  console.log(userDoc.password);

  UsuarioModel.updateOne({ _id: request.params.userId }, userDoc)
  .then(dados => {
    response.redirect(`/perfil/${request.params.userId}`);
  })
  .catch(error => {
    console.log(error);
  });
};

module.exports = updateUser;