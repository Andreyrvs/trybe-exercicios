type Bird = {
  foot: string;
  head: string;
}

type Sum = (x: number, y: number) => number

type Address = {
  street: string;
  city: string;
  state: string;
}

type EstadosFisicos = 'liquido' | 'solido' | 'gasoso';
type Cpf = '123.567.890-12' | 123456789012
type Os = 'linux' | 'mac' | 'windows'
type Vogais = 'a' | 'e' | 'i' | 'o' | 'u'


class Dog {
  name: string;
  color: string;
  age: number;
  constructor(name: string, color: string, age: number) {
    this.name = name;
    this.color = color;
    this.age = age;
  }

  bark(): void {
    console.log("auau");
  }
}

class House {
  owner: string;
  address: string;
  color: string;
  area: number;
  constructor(owner: string, address: string, color: string, area: number) {
    this.owner = owner;
    this.address = address;
    this.color = color;
    this.area = area
  }
}

class Flight {
  origin: string;
  destination: string;
  departureDate: Date;
  arrivalDate: Date;
  passengers: number;

  constructor(origin: string, destination: string, departureDate: Date, arrivalDate: Date, passengers: number) {
    this.origin = origin;
    this.destination = destination;
    this.departureDate = departureDate;
    this.arrivalDate = arrivalDate;
    this.passengers = passengers;
  }
}

interface Car {
  name: string;
  brand: string;
  color: string;
  doors: number;
  gears: number;
  turnOn: () => void;
  turnOff: () => void;
  speedUp: () => void;
  speedDown: () => void;
  break: () => void;
}

interface Feline {
  name: string;
  subfamilies: string;
  walk: () => void;
  hunt: () => void;
  eat: () => void;
  sleep: () => void;
}

interface Aircraft {
  model: string;
  brand: string;
  wings: number;
  engines: number;
  isManned: boolean;
  turnOn: () => void;
  turnOff: () => void;
  speedUp: () => void;
  speedDown: () => void;
}