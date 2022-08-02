import Colors from './Colors';
import Direcao from './Direcao';
import Portas from './Portas';

class Car {
  brand: string;

  color: Colors;

  doors: number;

  constructor(brand: string, color: Colors, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  }

  honk(): void {
    console.log('aciona a busina do carro');
  }

  openTheDoor(porta: Portas): void {
    console.log(`abre a porta ${porta}`);
  }

  closeTheDoor(porta: Portas): void {
    console.log(`fecha a porta${porta}`);
  }

  turnOn(): void {
    console.log('liga o carro');
  }

  turnOff(): void {
    console.log('desliga o carro');
  }

  speedUp(): void {
    console.log('desliga o carro');
  }

  speedDown(): void {
    console.log('reduz a velocidade do carro');
  }

  stop(): void {
    console.log('para o carro');
  }

  turn(direcao: Direcao): void {
    console.log(`vira o carro ${direcao}`);
  }
}

export default Car;
