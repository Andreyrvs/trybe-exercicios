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

let textItem = ['Eu sou a secao irmao do elementoOndeVoceEsta'];
let SecitonFather = document.querySelector('#pai');
let brotherElementoOndeVoceEsta =  textItem

let creatSectionItem = document.createElement('section');
creatSectionItem.innerText = brotherElementoOndeVoceEsta;
SecitonFather.appendChild(creatSectionItem)