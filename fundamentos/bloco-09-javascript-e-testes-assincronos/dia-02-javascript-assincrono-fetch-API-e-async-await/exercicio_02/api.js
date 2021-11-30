const API_URL = 'https://api.coincap.io/v2/assets';

const fetchCripto = () => {
  const myObject = {
    method: 'GET',
    headers: { Accept: 'Accept-Encoding' },
  };

  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((obj) =>
      obj.data.map((datas) => datas)
      .find((el) => append(`${el.name} (${el.symbol}): ${el.priceUsd}`))
    );


};

function isBigEnough(value) {
  return value >= 10
}

function append(lista) {
  const catchH2 = document.querySelector('#listaCripto');
  const creatLi = document.createElement('li')
  creatLi.innerHTML = lista;
  catchH2.appendChild(creatLi)
}
fetchCripto()
// window.onload = () => fetchCripto();
//
