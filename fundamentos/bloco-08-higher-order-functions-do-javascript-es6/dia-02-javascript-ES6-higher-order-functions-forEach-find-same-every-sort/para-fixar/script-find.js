// ---------- Exercicio 01 ----------

const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (numbers) => {
  // Adiciona seu código aqui
  if (numbers % 3 === 0 && numbers % 3 === 0) {
    return numbers
  }
}

const achaNumber = numbers.find(findDivisibleBy3And5);

// console.log(findDivisibleBy3And5(achaNumber))


// ---------- Exercicio 02 ----------

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (letter) => {
  // Adicione seu código aqui:
  return letter.length === 5
}

const achaName = names.find(findNameWithFiveLetters)

console.log(findNameWithFiveLetters(achaName));
console.log(achaName);