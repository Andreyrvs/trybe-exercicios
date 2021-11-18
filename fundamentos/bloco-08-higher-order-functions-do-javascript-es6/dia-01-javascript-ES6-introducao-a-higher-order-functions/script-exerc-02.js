const sorteio = (aposta, callback) => {
  const min = 1;
  const max = 5;
  let sorteado = 0
  sorteado += Math.floor(Math.random() * (max - min + 1) + min);
  const verificacao = callback(aposta, sorteado);

  console.log(sorteado);
  return verificacao;
};

console.log(
  sorteio(1, (aposta, sorteado) => {
    if (aposta === sorteado) {
      return 'Parabéns você ganhou';
    }
    if (aposta !== sorteado) {
      return 'Tente novamente';
    }
  })
);
