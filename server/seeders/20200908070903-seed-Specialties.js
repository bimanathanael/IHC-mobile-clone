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
   return queryInterface.bulkInsert('Specialties', [
    {
      doctor_id: 1,
      skill_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      doctor_id: 1,
      skill_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      doctor_id: 1,
      skill_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      doctor_id: 2,
      skill_id: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      doctor_id: 2,
      skill_id: 5,
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
    return queryInterface.bulkDelete('Specialties', null, {});

  }
};
