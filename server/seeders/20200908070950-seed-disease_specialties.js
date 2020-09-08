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
   return queryInterface.bulkInsert('Disease_Specialties', [
    {
      doctor_id: 1,
      disease_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      doctor_id: 1,
      disease_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      doctor_id: 1,
      disease_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      doctor_id: 2,
      disease_id: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      doctor_id: 2,
      disease_id: 5,
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

    return queryInterface.bulkDelete('Disease_Specialties', null, {});

  }
};
