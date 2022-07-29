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
