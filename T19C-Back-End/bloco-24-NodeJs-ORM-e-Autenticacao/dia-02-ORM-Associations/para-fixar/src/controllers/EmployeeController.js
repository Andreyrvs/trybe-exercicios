const EmployeeService = require('../services/EmloyeeService');

const createNew = async (req, res) => {
  try {
    const { firstName, lastName, age, city, street, number } = req.body;
  
    const employee = await EmployeeService.createNew(
      { firstName, lastName, age, city, street, number },
  );
  
    if (!employee) {
      return res.status(400).json({ message: 'Bad Request' });
    }
  
    return res.status(201).json({ message: 'Cadastrado com sucesso' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Algo deu errados' });
  }
};

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

const getByIdLazy = async (req, res) => {
  try {
  const { id } = req.params;

  const result = await EmployeeService.getByIdLazy(id);

  if (!result.employee || !result.addresses) {
    return res.status(404).json({ message: 'Funcionário não encontrado' });
  }

  if (req.query.includeAddresses === 'true') {
    return res.status(200).json(result);
  }
  return res.status(200).json(result.employee);
} catch (error) {
  console.log(error.message);

  res.status(500).json({ message: 'Algo deu errado' });
}
};

module.exports = {
  createNew,
  getAll,
  getByIdEager,
  getByIdLazy,
};