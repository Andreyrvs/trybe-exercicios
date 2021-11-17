const sorteio = (aposta) => {
  
  const min = 1;
  const max = 5;
  const resultado = Math.floor(Math.random() * (max - min + 1) + min);
  return resultado
}

const checar = () => {
  if (resultado !== aposta) {
    return 'Tente Novamente'
  }
  return 'Parabéns você ganhou'
}

console.log(sorteio(checar(2)));

