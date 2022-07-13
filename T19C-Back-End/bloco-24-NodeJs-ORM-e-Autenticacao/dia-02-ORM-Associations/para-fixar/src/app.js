const express = require('express');

const EmployeeController = require('./controllers/EmployeeController');
const { Address, Employee } = require('./models');

const app = express();

app.use(express.json());

app.get('/employees', EmployeeController.getAll);
app.get('/eagerLoading/:id', EmployeeController.getByIdEager);

// Lazy loading
app.get('/lazyLoading/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findOne({ where: { id } });

    if (!employee) { return res.status(404).json({ message: 'Funcionário não encontrado' }); }

    if (req.query.includeAddresses === 'true') {
      const addresses = await Address.findAll({ where: { employeeId: id } });
      return res.status(200).json({ employee, addresses });
    }

    return res.status(200).json(employee);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});
module.exports = app;
