import Cliente from './Cliente';
import Order from './Order';
import OrderItem from './OrderItem';

const client = new Cliente('Jao');

const sanduiche = new OrderItem('Sanduiche natural', 5.00);

const suco = new OrderItem('Suco de laranja', 10.00);
const sobreMesa = new OrderItem('laranja', 30.00);

const pedido = new Order(client, [sanduiche, suco, sobreMesa], 'credito', 0.10)

console.log(pedido);
