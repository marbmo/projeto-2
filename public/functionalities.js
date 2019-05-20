const cepInfo  = axios.create({
  baseURL: 'https://viacep.com.br/ws/',
});

const updateInput = (field, value) => {
  document.querySelector(`input[name='${field}']`).value = value;
};

function getCepInfo() {
  const cepInputValue = document.querySelector("input[name='cep']").value;

  cepInfo.get(`${cepInputValue}/json`)
  .then(responseFromAPI => {
    const { logradouro, bairro, localidade, uf } = responseFromAPI.data;

    updateInput('end', logradouro);
    updateInput('bairro', bairro);
    updateInput('cidade', localidade);
    updateInput('estado', uf);
  })
}

const cepInput = document.querySelector("input[name='cep']");
cepInput.addEventListener("focusout", getCepInfo);