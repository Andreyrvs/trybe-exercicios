'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Users', 'phone_num', {
      type: Sequelize.STRING,
    });
  },

  down: async (queryInterface, __Sequelize) => {
    await queryInterface.removeColumn('Users', 'phone_num');
  },
};
