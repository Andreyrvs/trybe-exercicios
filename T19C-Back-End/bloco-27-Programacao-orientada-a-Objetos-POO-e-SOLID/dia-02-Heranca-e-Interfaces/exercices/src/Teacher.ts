import Employee from './interfaces/Employee';
import Person from './Person';
import Subject from './Subject';

class Teacher extends Person implements Employee {
  private _subject: Subject;
  private _registration = String();
  private _admissionDate: Date;

  constructor(name: string, birthDate: Date, private _salary: number, subject: Subject) {
    super(name, birthDate)

    this._subject = subject
    this.salary = _salary
    this._admissionDate = new Date()
    this.registration = this.generateRegistration()
  }

  public get subject(): Subject {
    return this._subject;
  }

  public set subject(value: Subject) {
    this._subject = value;
  }

  public get salary(): number {
    return this._salary
  }

  public set salary(value: number) {
    this.validateSalary(value)
    this._salary = value;
  }

  public get admissionDate(): Date {
    return this._admissionDate;
  }

  public set admissionDate(value: Date) {
    this.validateAdmissionDate(value)
    this._admissionDate = value;
  }

  public get registration(): string {
    return this._registration;
  }

  public set registration(value: string) {
    this.validateRegistration(value)
    this._registration = value;
  }

  generateRegistration(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
    return `PRF${randomStr}`;
  }

  private validateSalary(value: number) {
    const positiveSalary = 0
    if (value < positiveSalary) {
      throw new Error(" O salário não pode ser negativo.");
    }
  }

  private validateAdmissionDate(value: Date) {
    if (value.getTime() > new Date().getTime()) {
      throw new Error("A data de admissão não pode ser no futuro");
    }
  }

  private validateRegistration(value: string) {
    const minimumOfCharacters = 16
    if (value.length < minimumOfCharacters) {
      throw new Error("O registro deve possuir no mínimo 16 caracteres");
    }
  }
}


export default Teacher