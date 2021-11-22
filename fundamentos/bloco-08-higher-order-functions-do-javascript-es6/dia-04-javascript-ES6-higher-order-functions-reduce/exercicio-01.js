const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten(acc, number) {
  // escreva seu código aqui
  return [acc + number]
}

const reduce = arrays.reduce(flatten)

console.log(reduce);