const readlineSync = require('readline-sync');

function calculaVelocidadeMedia(distancia, tempo) {
  const velocidadeMedia = distancia / tempo;
  
  return velocidadeMedia;
}

function main() {
  const distancia = readlineSync.questionInt("Distancia (km) ");
  const tempo =  readlineSync.questionInt("Tempo (h) ");

  const velocidadeMedia = calculaVelocidadeMedia(distancia, tempo);
  
  console.log(`Velocidade media: ${velocidadeMedia}km/h`);
}

main()