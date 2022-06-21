const express = require('express');
const app = express();

app
  .route('/')
  .get((req, res)=> {
    res.send('Hello World! Get');
  })
  .post((req, res) => {
    res.send("Hello World! post");
  });

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
})