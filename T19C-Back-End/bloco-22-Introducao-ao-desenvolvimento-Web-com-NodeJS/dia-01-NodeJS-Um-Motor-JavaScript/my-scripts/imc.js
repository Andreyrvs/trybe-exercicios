const readlineSync = require('readline-sync');

const PESO_PADRAO_EM_KG = readlineSync.question("Qual seu peso? (Kg) ")
const ALTURA_PADRAO_EM_METROS = readlineSync.question("Qual sua altura? (m) ")

function main() {
  const imc = PESO_PADRAO_EM_KG / ALTURA_PADRAO_EM_METROS ** 2;
 console.log(imc);
}

main()