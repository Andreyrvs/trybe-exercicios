// 01 Adicione a tag h1 como filho do body
let textHone = ['Exercício 5.2 - JavaScript DOM'];
let itemHone = document.querySelector('body');
let bodyChild = textHone;
let createElementHone = document.createElement('h1');
createElementHone.innerText = bodyChild;

itemHone.appendChild(createElementHone);
console.log(itemHone);

// 02 Adicione a tag main com classe como filho da <body>
let mainText = 'Eu sou a tag main filha do body'
let mainItem = document.querySelector('body');

let createMainElement = document.createElement('main');
createMainElement.innerText = mainText
createMainElement.className = 'main-content';

mainItem.appendChild(createMainElement);

// 03 dicione a tag section com a classe como filho da tag main
let sectionText = 'Eu sou a tag section filha da main'
let sectionItem = document.querySelector('main');

let createSectionElement = document.createElement('section');
createSectionElement.innerText = sectionText;
createSectionElement.className = 'center-content';

sectionItem.appendChild(createSectionElement);

// 04 Adicione a tag p como filho do section
let pText = 'eu sou a tag p filha da section'
let pItem = document.querySelector('section');

let createElementP = document.createElement('p');
createElementP.innerText = pText;

pItem.appendChild(createElementP);

//  05 dicione a tag section com a classe como filha da main
let sectionTwoText = 'Eu sou a segunda tag section com classe filha da main';
let sectionTwoItem = document.querySelector('main');

let createSectionTwoElement = document.createElement('section');
createSectionTwoElement.innerText = sectionTwoText;

sectionTwoItem.appendChild(createSectionTwoElement);

//