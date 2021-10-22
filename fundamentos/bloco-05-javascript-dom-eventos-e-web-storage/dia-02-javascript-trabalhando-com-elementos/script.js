// 01 Adicione a tag h1 ao body
let textHone = ['Exercício 5.2 - JavaScript DOM'];
let itemHone = document.querySelector('body');
let bodyChild = textHone;
let createElementHone = document.createElement('h1')
createElementHone.innerText = bodyChild
itemHone.appendChild(createElementHone)
console.log(itemHone);

// 02 Adicione a tag main com classe a <body>
let mainText = 'Eu sou a tag main'
let mainItem = document.querySelector('body');

let createMainElement = document.createElement('main');
createMainElement.innerText = mainText
createMainElement.className = 'main-content';
mainItem.appendChild(createMainElement);

//