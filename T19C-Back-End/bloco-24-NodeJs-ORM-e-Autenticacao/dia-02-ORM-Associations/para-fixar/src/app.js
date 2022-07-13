const express = require('express');

const EmployeeController = require('./controllers/EmployeeController');
const UserBookController = require('./controllers/UserBookController');

const app = express();

app.use(express.json());

app.get('/employees', EmployeeController.getAll);
app.get('/eagerLoading/:id', EmployeeController.getByIdEager);
app.get('/lazyLoading/:id', EmployeeController.getByIdLazy);

app.get('/usersbooks/:id', UserBookController.getById);

module.exports = app;
