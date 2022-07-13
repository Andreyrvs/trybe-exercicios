const express = require('express');

const EmployeeController = require('./controllers/EmployeeController');

const app = express();

app.use(express.json());

app.get('/employees', EmployeeController.getAll);

module.exports = app;
