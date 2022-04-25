const readline = require('readline-sync')


function calculaVelocidadeMedia () {
  const tempo = readline.questionInt('Tempo? (segundos) ');
  const distancia = readline.questionInt('Distancia? (metros) ');

  const velocidadeMedia =(distancia /tempo).toFixed(2);
  
  console.log(`Velocidade média: ${velocidadeMedia} m/s`);
}
calculaVelocidadeMedia()