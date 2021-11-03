const conteudo = document.getElementById('conteudo');
const inputCor = document.getElementById('inputCor');
const paragrafo = document.getElementById('lorem');
const inputCorTexto = document.getElementById('inputCorTexto');
const inputFontSize = document.getElementById('inputFontSize');
const inputLineHeight = document.getElementById('inputLineHeight');
const inputFontFamily = document.getElementById('inputFontFamily');

function trocaCorFundo() {
  paragrafo.style.backgroundColor = inputCor.value;
  localStorage.setItem('corParagrafo', JSON.stringify(inputCor.value));
}

inputCor.addEventListener('change', trocaCorFundo);

function trocaCorTexto() {
  paragrafo.style.color = inputCorTexto.value;
  localStorage.setItem('corTexto', JSON.stringify(inputCorTexto.value));
}

inputCorTexto.addEventListener('change', trocaCorTexto);

function trocaTamanhoFonte() {
  paragrafo.style.fontSize = inputFontSize.value;
  localStorage.setItem('tamanhoFonte', JSON.stringify(inputFontSize.value));
}

inputFontSize.addEventListener('change', trocaTamanhoFonte);

function trocaEspaçamentoLinhas() {
  paragrafo.style.lineHeight = inputLineHeight.value;
  localStorage.setItem('espaçamentoEntreLinhas', JSON.stringify(inputLineHeight.value))
}

inputLineHeight.addEventListener('change', trocaEspaçamentoLinhas);
trocaEspaçamentoLinhas;

function trocaTipofonte() {
  paragrafo.style.fontFamily = inputFontFamily.value;
  localStorage.setItem(
    'tipoFonte',
    JSON.stringify(inputFontFamily.value)
  );
}

inputFontFamily.addEventListener('change', trocaTipofonte);

window.onload = function () {
  if (localStorage.length > 0) {
    paragrafo.style.backgroundColor = JSON.parse(localStorage.corParagrafo)
    paragrafo.style.color = JSON.parse(localStorage.corTexto)
    paragrafo.style.fontSize = JSON.parse(localStorage.tamanhoFonte)
    paragrafo.style.lineHeight = JSON.parse(localStorage.espaçamentoEntreLinhas)
    paragrafo.style.fontFamily = JSON.parse(localStorage.tipoFonte)
  }
}
