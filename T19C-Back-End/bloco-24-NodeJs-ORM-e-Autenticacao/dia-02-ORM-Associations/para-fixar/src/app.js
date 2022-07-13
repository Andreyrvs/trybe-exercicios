const express = require('express');

const EmployeeController = require('./controllers/EmployeeController');

const app = express();

app.use(express.json());

app.get('/employees', EmployeeController.getAll);
app.get('/eagerLoading/:id', EmployeeController.getByIdEager);
app.get('/lazyLoading/:id', EmployeeController.getByIdLazy);

module.exports = app;
