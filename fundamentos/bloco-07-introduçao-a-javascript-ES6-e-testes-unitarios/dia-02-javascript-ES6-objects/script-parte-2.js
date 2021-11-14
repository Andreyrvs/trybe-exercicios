const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// ------ Exercicio 01 ------
const addTurno = (Object, chave, valor) => {
  Object[chave] = valor;
};
addTurno(lesson2, 'turno', 'noite');
// console.log(lesson2);

// ------ Exercicio 02 ------
/* const listaKeys = (ParamObject) => Object.keys(ParamObject)

listaKeys(lesson2);
console.log(listaKeys(lesson2));
 */

// ------ Exercicio 03 ------
/* const retornaTamanho = (ParamObject) => Object.keys(ParamObject).length

retornaTamanho(lesson1)
console.log(retornaTamanho(lesson1)); 
*/

// ------ Exercicio 04 ------

// const listarValores = (ParamObject) => Object.values(ParamObject)

// listarValores(lesson1);
// console.log(listarValores(lesson1));

// ------ Exercicio 05 ------
/* 
const allLessons = {
  lesson1: {},
  lesson2: {},
  lesson3: {},
};

Object.assign(allLessons.lesson1, lesson1);
Object.assign(allLessons.lesson2, lesson2);
Object.assign(allLessons.lesson3, lesson3);
 */

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

// console.log(allLessons);

// ------ Exercicio 06 ------

const totalEstudantes = (lessonsParam) => {
  const keys = Object.keys(lessonsParam);

  let total = 0;

  for (let index = 0; index < keys.length; index += 1) {
    const currentKey = keys[index];
    total += lessonsParam[currentKey].numeroEstudantes;
  }

  return total;
};
// console.log(
totalEstudantes(allLessons);
// );

// ------ Exercicio 07 ------

const pegaValorPeloNumero = (object, number) => Object.values(object)[number];

console.log(pegaValorPeloNumero(lesson1, 0));

// ------ Exercicio 08 ------

const verificaExistencia = (object, key, value) => {
  const array = Object.entries(object);
  let existe = false;

  for (let index in array) {
    if (array[index][0] === key && array[index][1] === value) existe = true;
  }
  return existe;
};

console.log(verificaExistencia(lesson1, 'materia', 'matematica'));
