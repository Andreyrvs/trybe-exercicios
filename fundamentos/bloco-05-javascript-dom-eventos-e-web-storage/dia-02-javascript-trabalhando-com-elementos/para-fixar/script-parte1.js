// 01 Acesse o elemento elementoOndeVoceEsta .
// console.log(document.querySelector('#elementoOndeVoceEsta'));

// 02 Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
// function ondeEstou() {
//   let aqui = document.querySelector('#elementoOndeVoceEsta').parentElement;
//   aqui.style.backgroundColor = 'red';
//   console.log(aqui);
// }
// ondeEstou()

// 03 Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
// function firstChild() {
//   let pathFirstChild = document.querySelector('#elementoOndeVoceEsta').firstElementChild;

//   pathFirstChild.innerText = 'Eu sou o primeiro filho'
//   console.log(pathFirstChild);
// }
// firstChild()

// 04 Acesse o primeiroFilho a partir de pai .
// function fatherToSon() {
//   let fatherToSon = document.querySelector('#pai').firstElementChild;

//   console.log(fatherToSon);
// }
// fatherToSon()

// 05 Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
// console.log(document.querySelector('#elementoOndeVoceEsta').firstElementChild);

// 06 Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
// console.log(document.querySelector('#elementoOndeVoceEsta').nextSibling);

// 07 Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
// console.log(document.querySelector('#elementoOndeVoceEsta').nextElementSibling);

// 08 Agora acesse o terceiroFilho a partir de pai .
console.log(document.querySelector('#pai').lastElementChild.previousElementSibling)