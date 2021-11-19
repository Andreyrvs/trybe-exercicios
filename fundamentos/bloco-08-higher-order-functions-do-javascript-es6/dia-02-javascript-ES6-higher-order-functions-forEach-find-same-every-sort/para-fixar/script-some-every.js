// --------- Exercicio 01 ---------

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  //Adicione seu código aqui
  return arr.some((nomeAtual => nomeAtual === name))
}

console.log(hasName(names, 'Ana'))

// --------- Exercicio 02 ---------
