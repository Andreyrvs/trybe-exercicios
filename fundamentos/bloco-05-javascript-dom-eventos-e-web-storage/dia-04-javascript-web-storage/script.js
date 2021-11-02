const conteudo = document.getElementById('conteudo');
const inputCor = document.getElementById('inputCor');
const paragrafo = document.getElementById('lorem');
const inputCorTexto = document.getElementById('inputCorTexto');
const inputFontSize = document.getElementById('inputFontSize')
const inputLineHeight = document.getElementById('inputLineHeight')
const inputFontFamily = document.getElementById('inputFontFamily')

function trocaCorFundo() {
  paragrafo.style.backgroundColor = inputCor.value;
}

inputCor.addEventListener('change', trocaCorFundo);

function trocaCorTexto() {
  paragrafo.style.color = inputCorTexto.value
}

inputCorTexto.addEventListener('change', trocaCorTexto)

function trocaTamanhoFonte () {
  paragrafo.style.fontSize = inputFontSize.value;
}

inputFontSize.addEventListener('change', trocaTamanhoFonte)

function trocaEspaçamentoLinhas () {
  paragrafo.style.lineHeight = inputLineHeight.value;
}

inputLineHeight.addEventListener('change', trocaEspaçamentoLinhas)

function trocaTipofonte () {
  paragrafo.style.fontFamily = inputFontFamily.value;
}

inputFontFamily.addEventListener('change', trocaTipofonte)