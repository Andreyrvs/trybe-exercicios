import Enrollable from './Enrollable'
import Person from './Person'

export default class Employee extends Person implements Enrollable {
  private _enrollment =String()
  private _admissionDate: Date

  constructor(name:string, birthDate: Date, private _salary: number) {
    super(name, birthDate)

    this.salary = _salary
    this._admissionDate = new Date()
    this.enrollment = this.generateEnrollment()
  }

  public get enrollment() : string {
    return this._enrollment;
  }
  
  public set enrollment(value : string) {
    const minimumOfCharacters = 16
    if (value.length < minimumOfCharacters) {
      throw new Error(`A matricula deve ter possuir no minimo ${minimumOfCharacters} caracteres`);
    }
    this._enrollment = value;
  }
  
  public get salary() : number {
    return this._salary
  }
  
  public set salary(value : number) {
    const positiveSalary = 0
    if (value < positiveSalary ) {
      throw new Error('O salário não pode ser negativo.');
    }

    this._salary = value;
  }

  public get admissionDate() : Date {
    return this._admissionDate
  }

  public set admissionDate(value : Date) {
    if (value.getTime() > new Date().getTime()) {
      throw new Error("A data de admissão não pode ser uma data no futuro.");
    }

    this._admissionDate = value;
  }
  
  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `FUNC${randomStr}`;
  }
}