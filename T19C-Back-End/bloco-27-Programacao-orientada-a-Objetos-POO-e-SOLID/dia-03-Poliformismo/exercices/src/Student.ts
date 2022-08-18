import Enrollable from './interfaces/Enrollable';
import Person from './Person';

export default class Student extends Person implements Enrollable {
  private _enrollment = String()
  private _examsGrades: number[] = []
  private _worksGrades: number[] = []
  constructor(name: string, birthDate: Date) {
    super(name, birthDate);

    this.enrollment = this.generateEnrollment()
  }

  public get enrollment(): string {
    return this._enrollment;
  }

  public set enrollment(value: string) {
    const minimumOfCharacters = 16
    if (value.length < minimumOfCharacters) {
      throw new Error(`A matricula deve ter possuir no minimo ${minimumOfCharacters} caracteres`);
    }
    this._enrollment = value;
  }

  public get examsGrades(): number[] {
    return this._examsGrades;
  }

  public set examsGrades(value: number[]) {
    const numberOfGrades = 4
    if (value.length > numberOfGrades) {
      throw new Error(`Deve ter ${numberOfGrades} notas de provas`);
    }
    this._examsGrades = value
  }

  public get worksGrades(): number[] {
    return this._worksGrades;
  }

  public set worksGrades(value: number[]) {
    const numberOfWorks = 2
    if (value.length > numberOfWorks) {
      throw new Error(`Deve ter ${numberOfWorks} notas de trabalhos`);
    }
    this._worksGrades = value;
  }


  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `STU${randomStr}`;
  }

  sumGrades(): number {
    return [...this._examsGrades, ...this._worksGrades].reduce((prevValue, current) => {
      const sum = prevValue + current;

      return sum;
    }, 0);
  }

  sumAvarageGrade(): number {
    const avarage = this._examsGrades.length + this._worksGrades.length

    return Math.round(this.sumGrades() / avarage)
  }
}
