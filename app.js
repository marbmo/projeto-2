const { app } = require('./config');

const Routes = require('./routes');

app.listen(process.env.PORT, (error) => {
  if (error) {
    console.log('Erro ao subir o servidor na porta 3000');
  } else {
    console.log('App rodando na porta 3000');
  }
});
