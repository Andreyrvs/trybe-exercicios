import Colors from './Colors';
import Direcoes from './Direcoes';
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
    console.log('Buzinando: BIP BYP');
  }

  openTheDoor(porta: Portas): void {
    console.log(`Abre a porta ${porta}`);
  }

  closeTheDoor(porta: Portas): void {
    console.log(`Fecha a porta ${porta}`);
  }

  turnOn(): void {
    console.log('liga o carro');
  }

  turnOff(): void {
    console.log('desliga o carro');
  }

  speedUp(): void {
    console.log('Acelera o carro');
  }

  speedDown(): void {
    console.log('Reduz a velocidade do carro');
  }

  stop(): void {
    console.log('Para o carro');
  }

  turn(direcao: Direcoes): void {
    console.log(`Vira para ${direcao}`);
  }
}

export default Car;
