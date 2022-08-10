export default class Cliente {
  private nome: string;

  constructor(nome: string) {
    this.nome = nome
  }

  public getNome(): string {
    return this.nome
  }

  public setNome(value: string) {
    if(value.length < 3) {
      throw new Error('O nome deve conter no mínimo 3 caracteres.');
    }
    return this.nome = value
  }
}