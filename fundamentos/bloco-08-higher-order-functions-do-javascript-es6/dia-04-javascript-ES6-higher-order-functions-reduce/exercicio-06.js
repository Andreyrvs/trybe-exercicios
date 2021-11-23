const books = require('./reference-02-03-04');
const assert = require('assert');

/* 
6. - Agora vamos criar um novo array de objetos a partir das informações abaixo, onde cada objeto terá o formato { name: nome do aluno, average: media das notas } . Para isso vamos assumir que a posição 0 de notas refere-se ao aluno na posição 0 de alunos , aqui além de reduce será necessário utilizar também a função map . Dica: Você pode acessar o index do array dentro de map , e você pode ver o objeto esperado na constante expected .
*/

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [
  [9, 8, 10, 7, 5],
  [10, 9, 9, 10, 8],
  [10, 7, 10, 8, 9],
];

// ---------- Forma 01 de fazer --------------

// function studentAverage() {
//   // escreva seu código aqui
//   const notaAlunos = students.map((elemento, index) => ({
//     name: elemento,
//     average:
//       grades[index].reduce((acumulador, valorAtual) => acumulador + valorAtual, 0) / grades[index].length,
//   }));

//   return notaAlunos;
// }

// console.log(studentAverage());


// ---------- Forma 02 de fazer --------------

function sumGrades(acc, grade) {
  return acc + grade;
}

function calcAvegare(index) {
  const sum = grades[index].reduce(sumGrades, 0)

  return sum / grades[index].length
}

function studentAverage() {
  // escreva seu codigo aqui
  return students.reduce((acumulador, student, index) => {
    const object = {
      name: student,
      average: calcAvegare(index),
    };

    acumulador.push(object);
    return acumulador
  }, [])
}

console.log(studentAverage());

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepStrictEqual(studentAverage(), expected);

