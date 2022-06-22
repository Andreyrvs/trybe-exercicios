const express = require('express');

const app = express();

app.get('/hello', handleHelloWorldRequest);

app.listen(3030, () => {
  console.log('Aplicação ouvindo na porta 3030')
});

function handleHelloWorldRequest(_req, res) {
  res.status(200).send('Olá aaaassarr1mundo!')
};