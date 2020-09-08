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
   return queryInterface.bulkInsert('Docktor_Practice_Times', [
    {
      doctor_id: 1,
      practice_time_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      doctor_id: 2,
      practice_time_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      doctor_id: 3,
      practice_time_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      doctor_id: 4,
      practice_time_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      doctor_id: 5,
      practice_time_id: 2,
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
    return queryInterface.bulkDelete('Docktor_Practice_Times', null, {});

  }
};
