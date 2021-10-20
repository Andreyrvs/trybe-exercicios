function tagP(tag) {
  document.getElementsByClassName(tag)[0].innerText = 'Me vejo Trabalhando com progamação em uma empresa brasileira talvez';
  console.log(tagP.length);
}
tagP('texto-paragrafo')

function yellowSquare(trybeColor) {
  document.getElementsByClassName('main-content')[0].style.backgroundColor = trybeColor;

  console.log(yellowSquare.length);
}
yellowSquare('rgb(76,164,109')