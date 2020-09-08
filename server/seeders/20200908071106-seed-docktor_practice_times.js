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
      DoctorId: 1,
      PracticeTimeId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      DoctorId: 2,
      PracticeTimeId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      DoctorId: 3,
      PracticeTimeId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      DoctorId: 4,
      PracticeTimeId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      DoctorId: 5,
      PracticeTimeId: 2,
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
