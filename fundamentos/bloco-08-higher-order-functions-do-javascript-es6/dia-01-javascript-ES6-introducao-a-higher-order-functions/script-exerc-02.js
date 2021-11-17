
const sorteio = (callback) => {
  const min = 1;
  const max = 5;
  const resultado = Math.floor(Math.random() * (max - min + 1) + min);

  callback(resultado)

};

const checar = (aposta) => {
  if (aposta !== resultado) {
    return 'Tente novamente'
  } return 'Parabéns você ganhou'
};

console.log(sorteio(checar));
