import Person from './Person';

class Student extends Person {
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
    this.validateEnrollment(value)
    this._enrollment = value;
  }

  public get examsGrades(): number[] {
    return this._examsGrades;
  }

  public set examsGrades(value: number[]) {
    this.validateGrades(value)
    this._examsGrades = value
  }

  public get worksGrades(): number[] {
    return this._worksGrades;
  }

  public set worksGrades(value: number[]) {
    this.validateWorks(value)
    this._worksGrades = value;
  }

  private validateEnrollment(value: string): void {
    const minimumOfCharacters = 16
    if (value.length < minimumOfCharacters) {
      throw new Error(`A matricula deve ter possuir no minimo ${minimumOfCharacters} caracteres`);
    }
  }

  private validateGrades(value: number[]): void {
    const numberOfGrades = 4
    if (value.length > numberOfGrades) {
      throw new Error(`Deve ter ${numberOfGrades} notas de provas`);
    }
  }

  private validateWorks(value: number[]): void {
    const numberOfWorks = 2
    if (value.length > numberOfWorks) {
      throw new Error(`Deve ter ${numberOfWorks} notas de trabalhos`);
    }
  }

  private generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `STU${randomStr}`;
  }

  public sumGrades(): number {
    return [...this._examsGrades, ...this._worksGrades].reduce((prevValue, current) => {
      const sum = prevValue + current;

      return sum;
    }, 0);
  }

  public sumAvarageGrade(): number {
    const avarage = this._examsGrades.length + this._worksGrades.length

    return Math.round(this.sumGrades() / avarage)
  }
}

export default Student



