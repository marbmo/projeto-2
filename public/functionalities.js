const cepInfo  = axios.create({
  baseURL: 'https://viacep.com.br/ws/',
});

const updateInput = (field, value) => {
  document.querySelector(`input[name='${field}']`).value = value;
};

const getCepInfo = () => {
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

const showMenu = () => {
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
    if(element.hasAttribute('multiple')) {
      const options = element.dataset.value.split(',');
      options.map(elmnt => {
        element.options[elmnt-1].selected = true;
      });
    } else {
      element.selectedIndex = element.dataset.value-1;
    }
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

if (document.getElementById('cadastro-form-usuario') || document.getElementById('usuario-update-form')) {
  const passwordCheck = () => {
    console.log('clicou');
    const password = document.querySelector('input[name="senha"]');
    const retypePassword = document.querySelector('input[name="redigitar"]');
  
    if (password.value !== retypePassword.value) {
      password.style = "border: 1px solid red";
      retypePassword.style = "border: 1px solid red";
      document.querySelector('input[type="submit"]').disabled = true;
    } else {
      password.style = "border: 1px solid green";
      retypePassword.style = "border: 1px solid green";
      document.querySelector('input[type="submit"]').disabled = false;
    }
  }
  
  document.querySelector('input[name="senha"]').addEventListener('keyup', passwordCheck);
  document.querySelector('input[name="redigitar"]').addEventListener('keyup', passwordCheck);
}

const options = {
  periodo: {
    1: 'Integral',
    2: 'Meio Período',
    3: 'Ambos',
  },
  alimentacao: {
    1: 'Refeitório',
    2: 'Cantina Paga',
    3: 'Ambos',
  },
  linguas: {
    1: 'Inglês',
    2: 'Francês',
    3: 'Espanhol',
    4: 'Alemão',
    5: 'Outros',
  },
  faixa: {
    1: 'Abaixo de R$ 1.000,00',
    2: 'R$ 1.000,00 - R$ 2.000,00',
    3: 'R$ 2.000,00 - R$ 3.000,00',
    4: 'acima de R$ 3.000,00',
  },
  atividades: {
    1: 'Sim',
    2: 'Não',
  },
  material: {
    1: 'Próprio',
    2: 'Externo',
  },
  metodologia: {
    1: 'Construtivista',
    2: 'Montessori',
    3: 'Waldorf',
    4: 'Pikler',
    5: 'Freiriana',
    6: 'Própria',
  },
  pcd: {
    1: 'Sim',
    2: 'Não',
  }
}

if (document.getElementById('escola-info')) {
  const questions = document.querySelectorAll('.label');
  questions.forEach(element => {
    let answer = element.parentElement.querySelector('.resposta');
    if (element.dataset.name !== 'linguas') {
      answer.innerText = options[element.dataset.name][answer.innerText];
    } else {
      let linguas = answer.innerText.split(',').map(e => {return options[element.dataset.name][e]}).join(', ');
      answer.innerText = linguas;
    }
  });
}