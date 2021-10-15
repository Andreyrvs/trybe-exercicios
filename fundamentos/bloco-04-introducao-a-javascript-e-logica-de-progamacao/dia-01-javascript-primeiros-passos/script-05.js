const ladoA = 60;
const ladoB = 60;
const ladoC = 60;

let somaLados = ladoA + ladoB + ladoC;

if (somaLados == 180 ){
  console.log('true')
} else if (ladoA < 0 || ladoB < 0 || ladoC < 0 ){
  console.log('Invalido')
} else {
  console.log('false')
}
