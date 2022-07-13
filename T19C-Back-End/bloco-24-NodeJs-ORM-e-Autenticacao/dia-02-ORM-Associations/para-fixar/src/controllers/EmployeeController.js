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

module.exports = {
  getAll,
};