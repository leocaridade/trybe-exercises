import Swal from "sweetalert2";

// captura elementos 
const API_URL = 'https://api.exchangerate.host/latest?base=';
const inputText = document.querySelector('#input_text');
const button = document.querySelector('button');
const currencyCont = document.querySelector('#currency_container');
const paragraph = document.querySelector('#paragraph');

const resolved = () => {
}

const rejected = () => {
}

button.addEventListener('click', (moeda) => {
  moeda = inputText.value;

  const matchValue = `${API_URL}${moeda}`;

  if (!moeda) {
    Swal.fire({
      title: 'Ops...',
      text: 'Você precisa inserir uma moeda',
      icon: 'error',
      confirmButtonText: 'Ok'
    })
  } else {
    fetch(matchValue)
    .then((response) => response.json())
    .then((data) => {
      const rates = Object.entries(data.rates);
      rates.forEach((rate) => {
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `${rate[0]} ${rate[1]}`
  
        currencyCont.appendChild(newDiv);
      });
      paragraph.innerHTML = `Valores referentes a 1 ${moeda}`;
    })
    .catch((error) => console.log('Você errou'))
    }
  });

  