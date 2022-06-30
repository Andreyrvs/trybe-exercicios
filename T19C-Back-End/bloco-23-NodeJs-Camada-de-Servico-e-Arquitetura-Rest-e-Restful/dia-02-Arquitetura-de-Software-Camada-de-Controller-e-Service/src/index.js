const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.API_PORT;

app.get('/ping', (req, res) => res.status(200).json({ message: 'pong!' }));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));