import IPizza from './Pizza';
import { Common } from './PizzaFlavorTypes';

interface IPizzaCommon extends IPizza {
  flavor: Common
}

export default IPizzaCommon;
