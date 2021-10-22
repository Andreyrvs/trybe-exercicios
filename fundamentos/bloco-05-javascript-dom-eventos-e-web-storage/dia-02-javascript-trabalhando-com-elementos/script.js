// 01 Adicione a tag h1 como filho do body
let textHone = ['Exercício 5.2 - JavaScript DOM'];
let itemHone = document.querySelector('body');
let bodyChild = textHone;
let createElementHone = document.createElement('h1');
createElementHone.innerText = bodyChild;
createElementHone.className = 'title'
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
// EU PODERIA TER CRIADO UMA FUNCTION PARA GERAR AS SECTION E ODER REAPROVEITAR
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
let sectionLeftText = 'Eu sou a tag section com classe let-content filha da main';
let sectionLeftItem = document.querySelector('main');

let createSectionLeftElement = document.createElement('section');
createSectionLeftElement.innerText = sectionLeftText;
createSectionLeftElement.className = 'left-content'

sectionLeftItem.appendChild(createSectionLeftElement);

// 06 Adicione a tag section com a classe como filho da tag main
let sectionRigtText = 'Eu sou a tag section com classe right-content filha da main';
let sectionRigtItem = document.querySelector('main');

let createSectionRightElement = document.createElement('section');
createSectionRightElement.innerText = sectionRigtText;
createSectionRightElement.className = 'right-content';
createSectionRightElement.style = 'margin-right: auto'

sectionRigtItem.appendChild(createSectionRightElement);

// 07 Adicione uma imagem com src e classe e filha do section de passo 05
let imageItem = document.querySelector('.left-content')

let createImageElement = document.createElement('img');
createImageElement.src = 'https://picsum.photos/200'
createImageElement.className = 'small-image';

imageItem.appendChild(createImageElement);

// 08 dicione uma lista não ordenada com os valores de 1 a 10por extenso. filha do section criado no passo 6;

// cria a tag <ul> 
let ulItem = document.querySelector('.right-content')

let createUlElement = document.createElement('ul');

ulItem.appendChild(createUlElement)

// adiciona as tags <li>
let loArrayNumbers = ['um', 'dois', 'tres', 'quatro', 'cinco','seis',
'sete', 'oito', 'nove', 'dez'];
let liNumbersItem = document.querySelector('.right-content ul')

for (let index = 0; index < loArrayNumbers.length; index += 1) {
  let passPeloArray = loArrayNumbers[index];

  let createLoElement = document.createElement('li');
  createLoElement.innerText = passPeloArray;

  liNumbersItem.appendChild(createLoElement)
}

// 09 Adicione 3 tags h3 filhas do main ;
function createTagH(text) {
  // Essa função cria tags h3, basta chamar elas e criar uma let com seu texto;
  let createText = text;
  let hOneItem = document.querySelector('main')

  let createH3Element = document.createElement('h3');
  createH3Element.innerText = createText
  createH3Element.className = 'description'
  hOneItem.appendChild(createH3Element);
}

let h3Text = 'Eu sou a primeira h3'
createTagH(h3Text);
let h3Text2 = 'Eu sou a segundo h3'
createTagH(h3Text2);
let h3Text3 = 'Eu sou a terceica h3'
createTagH(h3Text3);

// vamos fazer algumas alterações e remoções:
// VIDE  READEME

// 03 Remove a section criada do passo 05
let selecFather = document.querySelector('main');
let selectSectionLeft = document.querySelector('.left-content');
let removeNode = selecFather.removeChild(selectSectionLeft);

// 04  Centralize a section criado no passo 6 
