"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cliente {
    constructor(nome) {
        this.nome = nome;
    }
    getNome() {
        return this.nome;
    }
    setNome(value) {
        if (value.length < 3) {
            throw new Error('O nome deve conter no mínimo 3 caracteres.');
        }
        return this.nome = value;
    }
}
exports.default = Cliente;
