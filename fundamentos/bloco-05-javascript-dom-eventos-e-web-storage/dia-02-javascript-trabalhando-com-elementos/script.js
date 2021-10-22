// 01 Adicione a tag h1 ao body
let textHone = ['Exercício 5.2 - JavaScript DOM'];
let itemHone = document.querySelector('body');
let bodyChild = textHone;
let createElementHone = document.createElement('h1')
createElementHone.innerText = bodyChild
itemHone.appendChild(createElementHone)
console.log(itemHone);