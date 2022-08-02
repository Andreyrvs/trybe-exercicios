import IPizza from './Pizza';
import { Vegetarian } from './PizzaFlavorTypes';

interface IPizzaVegetarian extends IPizza {
  flavor: Vegetarian
}

export default IPizzaVegetarian;
