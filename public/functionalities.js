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

if (cepInput) {
  cepInput.addEventListener("focusout", getCepInfo);
}

function showMenu() {
  let menu = document.getElementById("nav-links-mobile");
  if (menu.style.width === "100vw") {
    menu.style.width = "0";
  } else {
    menu.style.width = "100vw";
  }
}

const menuClick = document.getElementById('menu');
menuClick.addEventListener('click', showMenu);

// const proposta = document.getElementById('proposta');
// if (proposta) {
//   proposta.selectedIndex = proposta.dataset.value-1;
// }

const selects = document.querySelectorAll('select');

if (selects) {
  selects.forEach((element) => {
    element.selectedIndex = element.dataset.value-1;
  });
}

function startMap() {
  const logradouro = document.getElementById('logradouro-escola').innerText;
  const numero = document.getElementById('numero-escola').innerText;
  const bairro = document.getElementById('bairro-escola').innerText;
  const endString = { address: logradouro + ', ' + numero + ', ' + bairro };
  console.log(endString);

  geocoder = new google.maps.Geocoder();
  geocoder.geocode(endString, (results, status) => {
    const geocode = results[0].geometry.location;
    const map = new google.maps.Map(
      document.getElementById('mapa'),
      {
        zoom: 15,
        center: geocode
      }
    );
    new google.maps.Marker({
      position: geocode,
      map: map,
      title: document.getElementById('escola-name')
    });
  });

  
}

if (document.getElementById('mapa')) {
  startMap();
}