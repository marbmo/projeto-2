const UsuarioModel = require('../../model/usuarioModel');

const createUser = (request, response) => {
  const date = request.body.dataDia + '/' + request.body.dataMes + '/' + request.body.dataAno;
  let termos = false;
  if (request.body['termos'] == 'on') {
    termos = true;
  };
  const userDoc = {
    name: request.body.nome,
    lastName: request.body.sobrenome,
    email: request.body.email,
    termos: termos,
    dataNascimento: date,
  };

  UsuarioModel.create(userDoc, (error) => {
    if (error) {
      console.log(`Erro ao criar o documento: ${error}`);
      // response.render('criacaoerro');
    } else {
      console.log(`Salvamos o documento: ${userDoc.name}`);
      response.redirect('/cadastro-finalizado');
    }
  });
};

module.exports = createUser;