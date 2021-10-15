let notaDada = 10;
let notaMaxima = 100;
let Porcentagem = notaDada / notaMaxima * 100;
// console.log(Porcentagem);


if(notaDada < 0 || notaDada > 100) {
  console.log('Numero invalido')  
}else if (Porcentagem >= 90) {  
  console.log('A') 
} else if (Porcentagem >= 80) {
  console.log('B')
} else if (Porcentagem >= 70) {
  console.log('C')
} else if (Porcentagem >= 60) {
  console.log('D')
} else if (Porcentagem >= 50 ) {
  console.log('E')
} else if (Porcentagem < 50) {
  console.log('F')
}