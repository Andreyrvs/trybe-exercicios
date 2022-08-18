// import Person from './Person';
import Student from './Student'
import Employee from './Employee';
import Subject from './Subject';
import Teacher from './Teacher';
import Person from './Person';

// Exercicio 01

/* // tentar fazer isso agora deve gerar um erro
// já que nossa classe se tornou abstrata e não podemos criar instâncias de classes abstratas
// const pessoa = new Person('Carolina da Silva', new Date('2005/03/17'));

// isso não deve gerar nenhum erro
const carolina = new Student('Carolina da Silva', new Date('2005/03/17'));
console.log(carolina);

const math = new Subject('Matemática');
// isso também não deve gerar nenhum erro
const marta = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, math);
console.log(marta); */

// Exercicio 02
const carolina = new Student('Carolina da Silva', new Date('2005/03/17'));
const lucas = new Student('Lucas Peixoto Salgueiro', new Date('2006/07/19'));
console.log(carolina);
console.log(lucas);

const math = new Subject('Matemática');
const history = new Subject('História');

const marta = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, math);
const joao = new Teacher('João Antônio da Costa', new Date('1982/04/21'), 2000, history);
console.log(marta);
console.log(joao);

// Exercicio 03
/* const testInterfaceEmployee: Employee = {

  registration: 'FNC1234567891011',
  salary: 1200.00,
  admissionDate: new Date(),

  generateRegistration(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '')
    return `FNC${ randomStr }`
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

/* const math = new Subject('Matemática');
const history = new Subject('História');
const philosophy = new Subject('Filosofia');

const marta = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, math);
const joao = new Teacher('João Antônio da Costa', new Date('1982/04/21'), 2000, history);
const lucio = new Teacher('Lucio Teixeira', new Date('1986/01/29'), 2000, philosophy);


console.log(marta);
console.log(joao);
console.log(lucio); */

// ==== Polimorfismo