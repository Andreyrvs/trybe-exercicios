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
          publisher: "Bosa Nova",
        },
        {
          title: "Dom Quixote",
          author: "Miguel de Cervantes",
          page_quantity: 333,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          publisher: "Novo mundo",
        },
        {
          title: "Alma Campeira",
          author: "Os Monarcas",
          page_quantity: 999,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          publisher: "Gaucha",
        },
      ]
      , {}),

  down: async (queryInterface, __Sequelize) =>
    queryInterface.bulkDelete('Books', null, {})
};
