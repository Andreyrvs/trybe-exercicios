const readline = require('readline-sync')

const peso = readline.questionFloat('Qual seu peso? (em Kg) ')
const altura = readline.questionInt('Qual sua altura? (em cm) ');

function calculaImc() {
  const imc =(peso / Math.pow(altura / 100, 2)).toFixed(2);
  
  if (imc < 18.5) {
    console.log( `${imc} Abaixo do peso (magreza)`);
    return;
  }

  if (imc >= 18.5 && imc < 24.9 ) {
    console.log(`Peso normal`);
    return;
  }
  
  if (imc >= 25 && imc < 29.9 ) {
    console.log(`Acima do peso (sobrepeso)`);
    return;
  }

  if (imc > 30 && imc < 34.9 ) {
    console.log(`Obesidade grau I`);
    return;
  }

  if (imc >= 35 && imc < 39.9 ) {
    console.log(`Obesidade grau II`);
    return;
  }

  if (imc > 40 ) {
    console.log(`Obesidade graus III e IV`);
    return;
  }
}

calculaImc()

module.exports = calculaImc;