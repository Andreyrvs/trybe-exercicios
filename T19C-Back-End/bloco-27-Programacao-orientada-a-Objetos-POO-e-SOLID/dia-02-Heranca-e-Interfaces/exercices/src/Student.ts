import Person from './Person';

class Student extends Person {

  constructor(
    private _enrollment: string, private _examsGrades: number[], private _worksGrades: number[]
  ) {
    super('jao', new Date('1999/1/15'));
  }

  public get enrollment(): string {
    return this._enrollment;
  }

  public set enrollment(value: string) {
    this.validateEnrollment(value)
    this._enrollment = value;
  }

  public get examsGrades(): number[] {
    return this._examsGrades;
  }

  public set examsGrades(value: number[]) {
    this.validateGrades(value)
    this._examsGrades = value;
  }

  public get worksGrades(): number[] {
    return this._worksGrades;
  }

  public set worksGrades(value: number[]) {
    this._worksGrades = value;
  }

  validateEnrollment(value: string): void {
    const minimumOfCharacters = 16
    if (value.length < minimumOfCharacters) {
      throw new Error(`A matricula deve ter possuir no minimo ${minimumOfCharacters} caracteres`);
    }
  }

  validateGrades(value: number[]): void {
    const numberOfGrades = 4
    if (value.length !== numberOfGrades) {
      throw new Error(`Deve ter ${numberOfGrades} notas de provas`);
    }
  }

  validateWorks(value: number[]): void {
    const numberOfWorks = 2
    if (value.length !== numberOfWorks) {
      throw new Error(`Deve ter ${numberOfWorks} notas de trabalhos`);
    }
  }

  sumGrades(): number {
    return [...this._examsGrades, ...this._worksGrades].reduce((prevValue, current) => {
      const sum = prevValue + current;

      return sum;
    });
  }

  sumAvarageGrade(): number {
    const avarage = this._examsGrades.length + this._worksGrades.length

    return this.sumGrades() / avarage
  }
}

export default Student