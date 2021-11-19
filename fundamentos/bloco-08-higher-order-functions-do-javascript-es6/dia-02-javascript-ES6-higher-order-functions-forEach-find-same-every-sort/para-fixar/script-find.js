// ---------- Exercicio 01 ----------

const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (numero) => {
  return numbers.find((numero) => numero % 3 === 0 && numero % 5 === 0)
}



console.log(findDivisibleBy3And5())

// ---------- Exercicio 02 ----------

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (letter) => letter.length === 5;

const achaName = names.find(findNameWithFiveLetters);

// console.log(findNameWithFiveLetters(achaName));
// console.log(achaName);

// ---------- Exercicio 03 ----------

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

function findMusic(id) {
 
}

const achaId = musicas.find((element) => element.id === '31031685')
  
// console.log(achaId);

// console.log(findMusic('31031685'));
