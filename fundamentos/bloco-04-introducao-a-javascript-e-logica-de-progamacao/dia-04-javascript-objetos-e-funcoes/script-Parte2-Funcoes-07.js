

function verificaFimPalavra (stringWord, stringEnding) {
  
  let test = stringWord.endsWith(stringEnding)
  return console.log(test)
}

verificaFimPalavra('trybe', 'be');
verificaFimPalavra('joaofernando', 'fernan') ;