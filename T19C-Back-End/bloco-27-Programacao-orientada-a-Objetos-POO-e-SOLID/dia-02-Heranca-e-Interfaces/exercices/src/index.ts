// import Person from './Person';
import Student from './Student'
import Employee from './interfaces/Employee';
import Subject from './Subject';
import Teacher from './Teacher';
// Exercicio 01
/* const andrey = new Person('andrey', new Date('1997/06/16'))
const junin = new Person('junin', new Date('2000/02/10'))

console.log(andrey);
console.log(junin); */

// Exercicio 02
/* const andrey = new Student('Andrey', new Date('1997/06/16'));
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
console.log(fernando); */

// Exercicio 03
/* const testInterfaceEmployee: Employee = {

  registration: 'FNC1234567891011',
  salary: 1200.00,
  admissionDate: new Date(),

  generateRegistration(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '')
    return `FNC${randomStr}`
  },
}
console.log("🚀 ~ testInterfaceEmployee", testInterfaceEmployee)
 */

// Exercicio 04

/* const math = new Subject('math')
const story = new Subject('story')
const philosophy = new Subject('philosophy')

console.log(math);
console.log(story);
console.log(philosophy);
 */

// Exercicio 05 

const teacherAna = new Teacher('Ana', new Date('1980/4/23'), 2300, new Subject('Matematica'))

console.log(teacherAna);
