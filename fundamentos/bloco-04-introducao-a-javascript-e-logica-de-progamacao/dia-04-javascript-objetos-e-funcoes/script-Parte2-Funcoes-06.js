let n = 5

function somatorio(integerNumber) {
  let soma = 0;

  for (let index = 0; index <= integerNumber; index += 1) {
    
    soma += index;
  }
  return console.log(soma)
}
somatorio(n);