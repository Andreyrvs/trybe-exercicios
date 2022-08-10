"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OrderItem {
    constructor(nome, price) {
        this.nome = nome;
        this.price = price;
    }
    getNome() {
        return this.nome;
    }
    setNome(value) {
        if (value.length < 3) {
            throw new Error("O nome deve conter no mínimo 3 caracteres");
        }
        return this.nome = value;
    }
    getPrice() {
        return this.price;
    }
    setPrice(value) {
        if (value < 0) {
            throw new Error("O preço deve ser positivo");
        }
        return this.price = value;
    }
}
exports.default = OrderItem;
