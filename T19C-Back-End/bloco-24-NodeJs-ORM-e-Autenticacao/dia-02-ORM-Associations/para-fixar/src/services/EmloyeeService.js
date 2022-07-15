const Sequelize = require('sequelize');
const { Address, Employee } = require('../models');

const config = require('../config/config');
/*
  Essa linha será importante para que consigamos isolar nosso teste
  utilizando a configuração `test` do seu `config.{js | json}`
*/
const sequelize = new Sequelize(
  process.env.NODE_ENV === 'test' ? config.test : config.development,
);

const createManaged = async ({ firstName, lastName, age, city, street, number }) => {
  const result = await sequelize.transaction(async (t) => {
      const employee = await Employee.create({
        firstName, lastName, age,
      }, { transaction: t });
  
      await Address.create({
        city, street, number, employeeId: employee.id,
      }, { transaction: t });
    });

  return result;
};

const createUnmanaged = async ({ firstName, lastName, age, city, street, number }) => {
  const t = await sequelize.transaction();
  
  try {
    const employee = await Employee.create(
      { firstName, lastName, age },
      { transaction: t },
    );
    
    await Address.create(
      { city, street, number, employeeId: employee.id },
      { transaction: t },
    );
    await t.commit();
    return employee;
  } catch (error) {
    console.error(error.message);
    await t.rollback();
  }
};

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
  createManaged,
  createUnmanaged,
  getAll,
  getByIdEager,
  getByIdLazy,
};