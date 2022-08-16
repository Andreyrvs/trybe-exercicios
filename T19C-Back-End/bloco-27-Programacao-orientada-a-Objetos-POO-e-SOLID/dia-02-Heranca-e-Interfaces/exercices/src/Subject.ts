class Subject {

  constructor(private _name: string) {
    this.name = _name
  }

  public get name(): string {
    return this._name
  }
  public set name(value: string) {
    this.validateName(value)
    this._name = value
  }

  validateName(value: string): void {
    const minimunOfCharacters = 3
    if (value.length < minimunOfCharacters) {
      throw new Error("O nome tem que possuir no mínimo 03 caracteres");
    }
  }

}

export default Subject