import Cliente from './Cliente';
import OrderItem from './OrderItem';

export default class Order {
  private cliente: Cliente;
  private itemPedido: OrderItem[]= Array();
  private formaDePagamento: string;
  private desconto = 0;

  constructor(cliente: Cliente, itemPedido: OrderItem[], formaDePagamento: string, desconto: number) {
    this.cliente = cliente
    this.itemPedido = itemPedido
    this.formaDePagamento = formaDePagamento
    this.desconto = desconto
  }

  public getClient(): Cliente {
    return this.cliente
  }

  public setClient(value: Cliente) {
    return this.cliente = value
  }

  public getItemPedido(): OrderItem[] {
    return this.itemPedido
  }

  public setItemPedito(value: OrderItem[]) {
    if(value.length === 0) {
      throw new Error("O pedido deve ter pelo menos um item");
    }
    
    return this.itemPedido = value
  }

  public getFormaDePagamento(): string {
    return this.formaDePagamento
  }

  public setFormaDePagamento(value: string) {
    return this.formaDePagamento = value
  }

  public getDesconto(): number {
    return this.desconto
  }

  public setDesconto(value: number) {
    if (value < 0) {
      throw new Error("O desconto não pode ser um valor negativo");
    }

    return this.desconto = value
  }

}