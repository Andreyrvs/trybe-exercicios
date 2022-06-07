const readlineSync = require('readline-sync');

const METROS_PARA_CM = 100;
const AO_QUADRADO = 2;

function main() {
  const peso = readlineSync.questionFloat("Qual seu peso? (Kg) ");
  const altura = readlineSync.questionInt("Qual sua altura? (cm) ");
  calculaImc(altura, peso)
  
}

function calculaImc(altura, peso) {
  const metrosEmCm = altura / METROS_PARA_CM;
  const alturaAoQuadrado = metrosEmCm ** AO_QUADRADO;
  
  const imc = peso / alturaAoQuadrado
  verificaIMC(imc)
  console.log(`Seu imc é: ${imc}`);

}

function verificaIMC(imc){
if (imc < 18.5) {
  console.log('Situação: Abaixo do peso (magreza)');
  return;
}

if (imc >= 18.5 && imc < 25) {
  console.log('Situação: Peso normal');
  return;
}

if (imc >= 25 && imc < 30) {
  console.log('Situação: Acima do peso (sobrepeso)');
  return;
}

if (imc >= 30 && imc < 35) {
  console.log('Situação: Obesidade grau I');
  return;
}

if (imc >= 35 && imc < 40) {
  console.log('Situação: Obesidade grau II');
  return;
}

console.log('Situação: Obesidade graus III e IV');
// ...
}
