const express = require('express');

const EmployeeController = require('./controllers/EmployeeController');

const app = express();

app.use(express.json());

app.get('/employees', EmployeeController.getAll);
app.get('/employees/:id', EmployeeController.getById);

module.exports = app;
