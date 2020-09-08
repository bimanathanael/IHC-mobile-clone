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
   return queryInterface.bulkInsert('Locations', [
    {
      name: 'Jakarta Pusat',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Jakarta Selatan',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Jakarta Barat',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Jakarta Timur',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Tangerang Selatan',
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
    return queryInterface.bulkDelete('Locations', null, {});

  }
};
