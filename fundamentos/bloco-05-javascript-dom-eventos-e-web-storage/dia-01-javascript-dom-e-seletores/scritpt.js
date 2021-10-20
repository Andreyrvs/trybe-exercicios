function tagId(tag) {
  document.getElementsByClassName(tag).innerText = 'Me vejo Trabalhando com progamação em uma empresa brasileira talvez';
  console.log(tagId.length);
}
tagId('texto-paragrafo');

function greenSquare(trybeColor) {
  document.getElementsByClassName('main-content')[0].style.backgroundColor = trybeColor;

  console.log(greenSquare.length);
}
greenSquare('rgb(76,164,109');

function whiteSquare(bgColor) {
  document.getElementsByClassName(bgColor)[0].style.backgroundColor = 'white';
}
whiteSquare('center-content')