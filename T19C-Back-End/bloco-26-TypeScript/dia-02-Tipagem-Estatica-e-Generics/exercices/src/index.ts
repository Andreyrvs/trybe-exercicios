/* eslint-disable no-console */
import Car from './Car';
import Color from './Colors';
import Direcoes from './Direcoes';
import IPizza from './Pizza';
import IPizzaCommon from './PizzaCommon';
import IPizzaSweet from './PizzaSweet';
import IPizzaVegetarian from './PizzaVegetarian';
import Portas from './Portas';

/**
 * Exercicio 02
 */

const newCar = new Car('volkswagen', Color.Prata, 4);
newCar.openTheDoor(Portas.Motorista);
newCar.closeTheDoor(Portas.Motorista);
newCar.turnOn();
newCar.speedUp();
newCar.speedDown();
newCar.turn(Direcoes.Esquerda);
newCar.speedUp();
newCar.speedDown();
newCar.turn(Direcoes.Esquerda);
newCar.speedUp();
newCar.speedDown();
newCar.turn(Direcoes.Direita);
newCar.speedDown();
newCar.stop();
newCar.honk();
newCar.openTheDoor(Portas.Atras_do_carona);
newCar.closeTheDoor(Portas.Atras_do_carona);
newCar.speedUp();
newCar.speedDown();
newCar.turn(Direcoes.Direita);
newCar.speedUp();
newCar.speedDown();
newCar.turn(Direcoes.Esquerda);
newCar.speedUp();
newCar.speedDown();
newCar.turn(Direcoes.Direita);
newCar.speedDown();
newCar.stop();
newCar.openTheDoor(Portas.Atras_do_carona);
newCar.closeTheDoor(Portas.Atras_do_carona);
newCar.speedUp();

/**
 * Exercicio 03
 */

const calabresa: IPizza = {
  flavor: 'Calabresa',
  slices: 4,
};

console.log(calabresa);

const marguerita: IPizza = {
  flavor: 'Marguerita',
  slices: 6,
};

console.log(marguerita);

const nutela: IPizza = {
  flavor: 'Nutela',
  slices: 8,
};

console.log(nutela);

/**
 * Exercicio 04
 */

const commonCalabresa: IPizzaCommon = {
  flavor: 'Calabresa',
  slices: 4,
};
console.log('🚀 ~ commonCalabresa', commonCalabresa);

const commonFrango: IPizzaCommon = {
  flavor: 'Frango',
  slices: 6,
};
console.log('🚀 ~ commonFrango', commonFrango);

const commonPepperoni: IPizzaCommon = {
  flavor: 'Pepperoni',
  slices: 8,
};
console.log('🚀 ~ commonPepperoni', commonPepperoni);

const vegetarianPalmito: IPizzaVegetarian = {
  flavor: 'Palmito',
  slices: 6,
};
console.log('🚀 ~ vegetarianPalmito', vegetarianPalmito);

const vegetarianCogumelo: IPizzaVegetarian = {
  flavor: 'Cogumelo',
  slices: 8,
};
console.log('🚀 ~ vegetarianCogumelo', vegetarianCogumelo);

const sweetGoiabadaComQueijo: IPizzaSweet = {
  flavor: 'Goiabada com Queijo',
  slices: 4,
};
console.log('🚀 ~ sweetGoiabadaComQueijo', sweetGoiabadaComQueijo);
