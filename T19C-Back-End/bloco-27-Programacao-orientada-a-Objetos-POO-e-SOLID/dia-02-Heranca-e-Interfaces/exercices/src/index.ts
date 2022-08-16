// import Person from './Person';
import Student from './Student'

// const andrey = new Person('andrey', new Date('1997/06/16'))
// const junin = new Person('junin', new Date('2000/02/10'))

// console.log(andrey);
// console.log(junin);

const andrey = new Student('Andrey', new Date('1997/06/16'));
const carolina = new Student('Carolina da Silva', new Date('2005/03/17'));
const lucas = new Student('Lucas Peixoto Salgueiro', new Date('2006/07/19'));
const jessica = new Student('Jéssica Bianca Nunes', new Date('2004/06/06'));
const tamires = new Student('Tamires Santos Bastos', new Date('2005/11/05'));
const fernando = new Student('Fernando Gonçalves', new Date('2006/09/11'));

carolina.examsGrades = [25, 20, 25, 23];
lucas.examsGrades = [25, 20, 25, 23];
andrey.examsGrades = [5, 10, 6, 8]
jessica.worksGrades = [50, 45];
tamires.worksGrades = [47, 42];
andrey.worksGrades = [5, 10]

console.log(andrey);
console.log(carolina);
console.log(lucas);
console.log(jessica);
console.log(tamires);
console.log(fernando);
