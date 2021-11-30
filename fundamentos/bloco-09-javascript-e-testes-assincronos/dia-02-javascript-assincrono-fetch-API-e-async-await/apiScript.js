// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => append(data.joke));


};

function append(piada) {
  const pegaBody = document.querySelector('body');
  const criaTag = document.createElement('p')
  criaTag.innerHTML = piada
  pegaBody.appendChild(criaTag)
}



window.onload = () => fetchJoke();