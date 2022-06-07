const readlineSync = require('readline-sync');

const PESO_PADRAO_EM_KG = readlineSync.questionFloat("Qual seu peso? (Kg) ");
const ALTURA_PADRAO_EM_CM = readlineSync.questionInt("Qual sua altura? (cm) ");
const METROS_PARA_CM = 100;
const AO_QUADRADO = 2;

function main() {

  const metrosEmCm = ALTURA_PADRAO_EM_CM / METROS_PARA_CM;
  const alturaAoQuadrado = metrosEmCm ** AO_QUADRADO;

  const imc = PESO_PADRAO_EM_KG / alturaAoQuadrado

  console.log(`Seu imc é: ${imc}`);
}

main()