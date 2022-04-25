const readline = require('readline-sync');

function sorteio () {
  const numeroPseudoAleatorio = Math.floor(Math.random() * 10) + 1;

  const entradaNumero = readline.questionInt('Digite um numeroPseudoAleatorio de 0 a 10! ')

  if (entradaNumero === numeroPseudoAleatorio) {
    console.log("Parabéns, número correto!");
    return;
  } else {
    console.log(`Opa, não foi dessa vez. O número era ${numeroPseudoAleatorio}`);
    return;
  }

}

sorteio()