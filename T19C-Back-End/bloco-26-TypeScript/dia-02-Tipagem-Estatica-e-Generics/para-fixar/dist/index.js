"use strict";
class Dog {
    constructor(name, color, age) {
        this.name = name;
        this.color = color;
        this.age = age;
    }
    bark() {
        console.log("auau");
    }
}
// const dog2 = new Dog('nina', 'azul', 3)
// console.log(dog2);
class House {
    constructor(owner, address, color, area) {
        this.owner = owner;
        this.address = address;
        this.color = color;
        this.area = area;
    }
}
class Flight {
    constructor(origin, destination, departureDate, arrivalDate, passengers) {
        this.origin = origin;
        this.destination = destination;
        this.departureDate = departureDate;
        this.arrivalDate = arrivalDate;
        this.passengers = passengers;
    }
}
let ferrari = {
    name: "super carro",
    brand: "ferrari",
    color: "red",
    doors: 2,
    gears: 4,
    motor: "V12",
    turnOn: function () {
        console.log("ligado");
    },
    turnOff: function () {
        console.log("desligado");
    },
    speedUp: function () {
        console.log("acelerando");
    },
    speedDown: function () {
        console.log("desacelerando");
    },
    break: function () {
        console.log("parar");
    }
};
ferrari.turnOn();
ferrari.speedUp();
// interface Feline {
//   name: string;
//   subfamilies: string;
//   walk: () => void;
//   hunt: () => void;
//   eat: () => void;
//   sleep: () => void;
// }
// interface Aircraft {
//   model: string;
//   brand: string;
//   wings: number;
//   engines: number;
//   isManned: boolean;
//   turnOn: () => void;
//   turnOff: () => void;
//   speedUp: () => void;
//   speedDown: () => void;
// }
