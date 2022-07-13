const { Address, Employee } = require('../models');

const getAll = async () => {
  const employees = await Employee.findAll({
    include: { model: Address, as: 'addresses' },
  });

  if (!employees) return null;

  return employees;
};

module.exports = {
  getAll,
};