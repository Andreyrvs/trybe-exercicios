const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

app.post('/recipes', function (req, res) {
  const {id, name, price} = req.body;
  recipes.push({id, name, price});
  res.status(201).json({message: 'Recipe created successfully!'})
});

app.get('/recipes', function (_req, res) {
  res.json(recipes)
});

app.get('/drinks', function (_req, res) {
  res.json(drinks);
});

// ...

app.get('/validateToken', function (req, res) {
  const token = req.headers.authorization;
  if (token.length !== 16) return res.status(401).json({message: 'Invalid Token!'});

  res.status(200).json({message: 'Valid Token!'})
});

// ...

app.get('/recipes/search', function (req, res) {
  const { name, maxPrice } = req.query;
  const filteredRecipes = recipes.filter((item) => item.name.includes(name) && item.price < Number(maxPrice));
  res.status(200).json(filteredRecipes);
});

app.get('/drinks/search', function (req, res) {
  const { name } = req.query;
  const filteredDrinks = drinks.filter((item) => item.name.includes(name));
  res.status(200).json(filteredDrinks);
})


app.get('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipe = recipes.find((item) => item.id === Number(id));

  if (!recipe) return res.status(404).json({ message: 'Recipe not found' });
  res.status(200).json(recipe)
})

app.get('/drinks/:id', function (req, res) {
  const { id } = req.params;
  const drink = drinks.find((item) => item.id === Number(id))

  if (!drink) return res.status(404).json({ message: "Drink not found" })
  res.status(200).json(drink)
})

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
})