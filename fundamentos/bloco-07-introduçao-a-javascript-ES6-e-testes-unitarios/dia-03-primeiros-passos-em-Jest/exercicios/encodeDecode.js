function encode(string) {
  // seu código aqui
  // O meu /a é a letra a ser substituida
  // O meu /g está trocando todas as letras ao mesmo tempo
  // O meu , '1' é o que eu quero substituir
  string = string.replace(/a/g, '1');
  string = string.replace(/e/g, '2');
  string = string.replace(/i/g, '3');
  string = string.replace(/o/g, '4');
  string = string.replace(/u/g, '5');

  return string;
}

function decode(string) {
  // seu código aqui
  string = string.replace(/1/g, 'a');
  string = string.replace(/2/g, 'e');
  string = string.replace(/3/g, 'i');
  string = string.replace(/4/g, 'o');
  string = string.replace(/5/g, 'u');
  return string;
}

module.exports = {
  encode,
  decode,
}

// Teste aqui

// console.log(
//   decode('1, 2, 3, 4, 5')
// );


/* console.log(

); */