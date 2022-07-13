const EmployeeService = require('../services/EmloyeeService');

const getAll = async (req, res) => {
  try {
    const employees = await EmployeeService.getAll();

    if (!employees) {
      return res.status(400).json({ message: 'Bad request' });
    }

    return res.status(200).json(employees);
  } catch (e) {
    console.error(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const getByIdEager = async (req, res) => {
  try {
    const { id } = req.params;

    const employee = await EmployeeService.getByIdEager(id);

    if (!employee) {
      return res.status(404).json({ message: 'Funcionário não encontrado' });
    }

    return res.status(200).json(employee);
  } catch (error) {
  console.error(error);
  
  res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  getAll,
  getByIdEager,
};