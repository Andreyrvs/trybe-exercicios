"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-console */
const Car_1 = __importDefault(require("./Cars/Car"));
const Colors_1 = __importDefault(require("./Cars/Colors"));
const Direcoes_1 = __importDefault(require("./Cars/Direcoes"));
const Portas_1 = __importDefault(require("./Cars/Portas"));
/**
 * Exercicio 02
 */
const newCar = new Car_1.default('volkswagen', Colors_1.default.Prata, 4);
newCar.openTheDoor(Portas_1.default.Motorista);
newCar.closeTheDoor(Portas_1.default.Motorista);
newCar.turnOn();
newCar.speedUp();
newCar.speedDown();
newCar.turn(Direcoes_1.default.Esquerda);
newCar.speedUp();
newCar.speedDown();
newCar.turn(Direcoes_1.default.Esquerda);
newCar.speedUp();
newCar.speedDown();
newCar.turn(Direcoes_1.default.Direita);
newCar.speedDown();
newCar.stop();
newCar.honk();
newCar.openTheDoor(Portas_1.default.Atras_do_carona);
newCar.closeTheDoor(Portas_1.default.Atras_do_carona);
newCar.speedUp();
newCar.speedDown();
newCar.turn(Direcoes_1.default.Direita);
newCar.speedUp();
newCar.speedDown();
newCar.turn(Direcoes_1.default.Esquerda);
newCar.speedUp();
newCar.speedDown();
newCar.turn(Direcoes_1.default.Direita);
newCar.speedDown();
newCar.stop();
newCar.openTheDoor(Portas_1.default.Atras_do_carona);
newCar.closeTheDoor(Portas_1.default.Atras_do_carona);
newCar.speedUp();
/**
 * Exercicio 03
 */
const calabresa = {
    flavor: 'Calabresa',
    slices: 4,
};
console.log(calabresa);
const marguerita = {
    flavor: 'Marguerita',
    slices: 6,
};
console.log(marguerita);
const nutela = {
    flavor: 'Nutela',
    slices: 8,
};
console.log(nutela);
/**
 * Exercicio 04
 */
const commonCalabresa = {
    flavor: 'Calabresa',
    slices: 4,
};
console.log('🚀 ~ commonCalabresa', commonCalabresa);
const commonFrango = {
    flavor: 'Frango',
    slices: 6,
};
console.log('🚀 ~ commonFrango', commonFrango);
const commonPepperoni = {
    flavor: 'Pepperoni',
    slices: 8,
};
console.log('🚀 ~ commonPepperoni', commonPepperoni);
const vegetarianPalmito = {
    flavor: 'Palmito',
    slices: 6,
};
console.log('🚀 ~ vegetarianPalmito', vegetarianPalmito);
const vegetarianCogumelo = {
    flavor: 'Cogumelo',
    slices: 8,
};
console.log('🚀 ~ vegetarianCogumelo', vegetarianCogumelo);
const sweetGoiabadaComQueijo = {
    flavor: 'Goiabada com Queijo',
    slices: 4,
};
console.log('🚀 ~ sweetGoiabadaComQueijo', sweetGoiabadaComQueijo);
