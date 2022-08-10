"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Order {
    constructor(cliente, itemPedido, formaDePagamento, desconto) {
        this.itemPedido = [];
        this.desconto = 0;
        this.cliente = cliente;
        this.itemPedido = itemPedido;
        this.formaDePagamento = formaDePagamento;
        this.desconto = desconto;
    }
    getClient() {
        return this.cliente;
    }
    setClient(value) {
        return this.cliente = value;
    }
    getItemPedido() {
        return this.itemPedido;
    }
    setItemPedito(value) {
        if (value.length === 0) {
            throw new Error("O pedido deve ter pelo menos um item");
        }
        return this.itemPedido = value;
    }
    getFormaDePagamento() {
        return this.formaDePagamento;
    }
    setFormaDePagamento(value) {
        return this.formaDePagamento = value;
    }
    getDesconto() {
        return this.desconto;
    }
    setDesconto(value) {
        if (value < 0) {
            throw new Error("O desconto não pode ser um valor negativo");
        }
        return this.desconto = value;
    }
}
exports.default = Order;
