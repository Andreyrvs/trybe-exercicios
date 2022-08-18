export default abstract class Person {
  constructor(private _name: string, private _birthDate: Date) {
    this.name = _name;
    this.birthDate = _birthDate;
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this.validateName(value);
    this._name = value;
  }

  public get birthDate(): Date {
    return this._birthDate;
  }

  public set birthDate(value: Date) {
    this.validateBirthDate(value);
    this._birthDate = value;
  }

  // Ajuda do Gabarito
  getAge(value: Date): number {
    const diff = Math.abs(new Date().getTime() - value.getTime());
    const yearMs = 31536000000;

    return Math.floor(diff / yearMs);
  }

  private validateName(name: string): void {
    if (name.length < 3) {
      throw new Error('O nome deve ter no minimo 03 caracteres');
    }
  }

  private validateBirthDate(birthDate: Date): void {
    if (birthDate.getTime() > new Date().getTime()) {
      throw new Error('Data de nascimento não pode ser uma data no futuro');
    }

    if (this.getAge(birthDate) > 120) {
      throw new Error('A pessoa deve ter no maximo 120 anos');
    }
  }
}
