function tagId(tag) {
  document.getElementsByClassName(tag)[0].innerText = 'Me vejo Trabalhando com progamação em uma empresa brasileira talvez';
  console.log(tagId.length);
}
tagId('texto-paragrafo');

function greenSquare(trybeColor) {
  document.getElementsByClassName('main-content')[0].style.backgroundColor = trybeColor;
}
greenSquare('rgb(76,164,109');

function whiteSquare(bgColor) {
  document.getElementsByClassName(bgColor)[0].style.backgroundColor = 'white';
}
whiteSquare('center-content')

function fixTextH1(h1) {
  document.getElementsByClassName(h1)[0].innerText = 'Exericício 5.1 - JavaScript'
}
fixTextH1('title')