'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('Books',
      [
        {
          title: "Dom Casmurro",
          author: "Machado de Assis",
          page_quantity: 210,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
      ]
      , {}),

  down: async (queryInterface, __Sequelize) =>
    queryInterface.bulkDelete('Books', null, {})
};
