const UsuarioModel = require('../../model/usuarioModel');

const updateUser = (request, response) => {
  const date = request.body.dataDia + '/' + request.body.dataMes + '/' + request.body.dataAno;

  userDoc = {
    name: request.body.nome,
    lastName: request.body.sobrenome,
    dataNascimento: date,
    password: request.body.senha,
  }

  UsuarioModel.updateOne({ _id: request.params.userId }, userDoc)
  .then(data => {
    response.redirect('/perfil/:userId', { data });
  })
  .catch(error => {
    console.log(error);
  });
};

module.exports = updateUser;