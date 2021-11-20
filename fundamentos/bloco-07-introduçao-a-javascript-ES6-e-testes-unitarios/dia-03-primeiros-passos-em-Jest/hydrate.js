function hydrate(stingParam) {
  const separaSting = stingParam.split('');
  let coposDAgua = 0;

  for (let index = 0; index < separaSting.length; index += 1) {
    const pegaCaracter = parseInt(separaSting[index]);

    if (pegaCaracter) {
      coposDAgua += pegaCaracter;
    }
  }

  let copo = 'copo';

  if (coposDAgua > 1) {
    copo = 'copos';
  }
  return `${coposDAgua} ${copo} de água`
}

module.exports = hydrate;

// Teste aqui
console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));