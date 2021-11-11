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
// const addTurno = (Object, chave, valor) => {
//   Object[chave] = valor;
// };
// addTurno(lesson2, 'turno', 'noite');
// console.log(lesson2);

// ------ Exercicio 02 ------
const listaKeys = (ParamObject) => Object.keys(ParamObject)

listaKeys(lesson2);
console.log(listaKeys(lesson2));

// ------ Exercicio 03 ------



// ------ Exercicio 0 ------