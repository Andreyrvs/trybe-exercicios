import IPizza from './Pizza';
import { Sweet } from './PizzaFlavorTypes';

interface IPizzaSweet extends IPizza {
  flavor: Sweet
  slices: 4
}

export default IPizzaSweet;
