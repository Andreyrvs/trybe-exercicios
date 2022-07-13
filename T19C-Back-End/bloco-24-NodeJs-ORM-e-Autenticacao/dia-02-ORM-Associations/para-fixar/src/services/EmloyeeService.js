const { Address, Employee } = require('../models');

const getAll = async () => {
  const employees = await Employee.findAll({
    include: { model: Address, as: 'addresses' },
  });

  if (!employees) return null;

  return employees;
};

const getByIdEager = async (id) => {
  const employee = await Employee.findOne({
    where: { id },
    include: [{ model: Address,
    as: 'addresses',
    attributes: { exclude: ['number'] } }],
  });

  if (!employee) return null;

  return employee;
};

const getByIdLazy = async (id) => {
  const employee = await Employee.findOne({ where: { id } });

  if (!employee) return null;

  const addresses = await Address.findAll({ where: { employeeId: id } });

  if (!addresses) return null;

  return { employee, addresses };
};

module.exports = {
  getAll,
  getByIdEager,
  getByIdLazy,
};