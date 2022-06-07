const readlineSync = require('readline-sync');

const PESO_PADRAO_EM_KG = readlineSync.questionFloat("Qual seu peso? (Kg) ");
const ALTURA_PADRAO_EM_CM = readlineSync.questionInt("Qual sua altura? (cm) ");
const METROS_PARA_CM = 100;
const AO_QUADRADO = 2;

function main() {

  const metrosEmCm = ALTURA_PADRAO_EM_CM / METROS_PARA_CM;
  const alturaAoQuadrado = metrosEmCm ** AO_QUADRADO;

  console.log(`Seu imc é: ${imc}`);
  const imc = PESO_PADRAO_EM_KG / alturaAoQuadrado
  tablelaImc(imc)

}

function tablelaImc(imc){
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

main()