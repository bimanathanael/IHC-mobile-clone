'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   return queryInterface.bulkInsert('Diseases', [
    {
      name: 'Batuk Kronis',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Sinusitis Kronis',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Kesulitan Menelan',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Influenza',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Katarak',
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Diseases', null, {});

  }
};
