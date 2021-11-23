// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Banana', 'Mamão', 'Maça', 'Laranja', 'Abacaxi', 'Pera'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Creme de Leite', 'Leite Condensado', 'Cacau'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  const saladaDeFrutas = [...fruit, ...additional]
  return saladaDeFrutas
};

console.log(fruitSalad(specialFruit, additionalItens));