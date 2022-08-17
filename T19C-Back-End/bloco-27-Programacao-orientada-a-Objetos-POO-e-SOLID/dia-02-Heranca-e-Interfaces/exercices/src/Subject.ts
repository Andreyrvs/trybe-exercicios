class Subject {
  constructor(private _name: string) {
    this.name = _name;
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    const minimunOfCharacters = 3;
    if (value.length < minimunOfCharacters) {
      throw new Error('O nome tem que possuir no mínimo 03 caracteres');
    }
    this._name = value;
  }
}

export default Subject;
