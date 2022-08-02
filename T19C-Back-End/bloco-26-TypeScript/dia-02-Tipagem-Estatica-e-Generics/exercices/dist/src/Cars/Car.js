"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    constructor(brand, color, doors) {
        this.brand = brand;
        this.color = color;
        this.doors = doors;
    }
    honk() {
        console.log('Buzinando: BIP BYP');
    }
    openTheDoor(porta) {
        console.log(`Abre a porta ${porta}`);
    }
    closeTheDoor(porta) {
        console.log(`Fecha a porta ${porta}`);
    }
    turnOn() {
        console.log('liga o carro');
    }
    turnOff() {
        console.log('desliga o carro');
    }
    speedUp() {
        console.log('Acelera o carro');
    }
    speedDown() {
        console.log('Reduz a velocidade do carro');
    }
    stop() {
        console.log('Para o carro');
    }
    turn(direcao) {
        console.log(`Vira para ${direcao}`);
    }
}
exports.default = Car;
