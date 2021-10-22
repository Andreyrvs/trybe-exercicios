// Aqui eu vi o video do course e fiz com o mesmo raciocinio para ententer,
// pois os nomes das variaveis estavam muito parecidas

// let textItem = ['Eu sou a secao irmao do elementoOndeVoceEsta'];

// let SecitonFather = document.querySelector('#pai');

// for (let index = 0; index < textItem.length; index += 1) {
  
//   let brotherElementoOndeVoceEsta =  textItem[index]
  
//   let creatSectionItem = document.createElement('section');
//   creatSectionItem.innerText = brotherElementoOndeVoceEsta;

//   SecitonFather.appendChild(creatSectionItem)
// }


// 01 Crie um irmão para elementoOndeVoceEsta .
let textItem = ['Eu sou a secao irmao criado do elementoOndeVoceEsta'];
let secitonFather = document.querySelector('#pai');
let brotherElementoOndeVoceEsta =  textItem

let creatSectionItem = document.createElement('section');
creatSectionItem.innerText = brotherElementoOndeVoceEsta;
secitonFather.appendChild(creatSectionItem)

console.log(secitonFather);

// 02 Crie um filho para elementoOndeVoceEsta .

let textItem2 = ['eu sou e filho criado de elementoOndeVoceEsta'];

let secitonFatherHere = document.querySelector('#elementoOndeVoceEsta');
let sonElementoOndeVoceEsta = textItem2;

let creatSonSectionItem = document.createElement('section');
creatSonSectionItem.innerHTML = sonElementoOndeVoceEsta;
secitonFatherHere.appendChild(creatSonSectionItem);

console.log(secitonFatherHere);

//