'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Users',
  [
    {
      fullName: 'Leonardo',
      email: 'leo@test.com',
      phoneNum: '123456789',
      // usamos a função CURRENT_TIMESTAMP do SQL para salvar a data e hora atual nos campos `createdAt` e `updatedAt`
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      fullName: 'JEduardo',
      email: 'edu@test.com',
      phoneNum: '987654321',
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
  ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};
