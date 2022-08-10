export default class OrderItem {
  private nome: string;
  private price: number;

  constructor(nome: string, price:number) {
    this.nome = nome;
    this.price = price;
  }

  getNome(): string {
    return this.nome
  }

  setNome(value: string) {
    if (value.length < 3) {
      throw new Error("O nome deve conter no mínimo 3 caracteres");
    }

    return this.nome = value
  }

  getPrice(): number {
    return this.price;
  }

  setPrice(value: number) {
    if (value < 0) {
      throw new Error("O preço deve ser positivo");
    }

    return this.price = value
  }
}