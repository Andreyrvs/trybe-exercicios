"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cliente_1 = __importDefault(require("./Cliente"));
const Order_1 = __importDefault(require("./Order"));
const OrderItem_1 = __importDefault(require("./OrderItem"));
const client = new Cliente_1.default('Jao');
const sanduiche = new OrderItem_1.default('Sanduiche natural', 5.00);
const suco = new OrderItem_1.default('Suco de laranja', 10.00);
const pedido = new Order_1.default(client, [sanduiche, suco], 'credito', .10);
console.log(`Pedido: ${pedido}`);
