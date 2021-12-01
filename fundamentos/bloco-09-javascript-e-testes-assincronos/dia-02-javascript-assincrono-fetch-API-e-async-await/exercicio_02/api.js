const API_URL = 'https://api.coincap.io/v2/assets';

const fetchCripto = async () => {
  const myObject = {
    method: 'GET',
    headers: { Accept: 'Accept-Encoding' },
  };

  const coins = await fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((obj) => obj.data)
    .catch((error) => error.toString())

  return coins
};

// Filtra as 10 primeiras Modedas
const filtraCoins = async () => {
  const coins = await fetchCripto();

  coins
    .filter((coin) => Number(coin.rank) <= 10)
    .forEach((coin) => {
      append(`${coin.name} (${coin.symbol}): ${coin.priceUsd}`)
    })

}

// Cria as li, é passada como na função fintraCoins
function append(lista) {
  const catchH2 = document.querySelector('#listaCripto');
  const creatLi = document.createElement('li')
  creatLi.innerHTML = lista;
  catchH2.appendChild(creatLi)
}

window.onload = () => filtraCoins();
