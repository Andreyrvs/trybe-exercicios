const { Address, Employee } = require('../models');

const getAll = async () => {
  const employees = await Employee.findAll({
    include: { model: Address, as: 'addresses' },
  });

  if (!employees) return null;

  return employees;
};

const getById = async (id) => {
  const employee = await Employee.findOne({
    where: { id },
    include: [{ model: Address,
    as: 'addresses',
    attributes: { exclude: ['number'] } }],
  });

  if (!employee) return null;

  return employee;
};

module.exports = {
  getAll,
  getById,
};