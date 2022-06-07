const readlineSync = require('readline-sync');

const DISTANCIA_KM = readlineSync.questionInt("Distancia (km) ");
const TEMPO_MINUTOS =  readlineSync.questionInt("Tempo (h) ");

function velocidadeMedia() {
  const calculo = DISTANCIA_KM / TEMPO_MINUTOS;

  console.log(`Velocidade media: ${calculo}km/h`);
}

velocidadeMedia()