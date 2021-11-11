const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  console.log(
  `Olá ${order.name}, entrega para: ${order.order.address}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}`
  );
};

customerInfo(order);

const orderModifier = (order) => {
  // console.table(order)
  // // Adicione abaixo as informações necessárias.
  // console.log(
  //   `Olá ${order.name}, o total do seu pedido de ${order.order.pizza.marguerita}, ${order.order.pizza.pepperoni} e ${order.order.drinks.coke} é R$ ${order.payment}.`
  //   );
};

orderModifier(order);
