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
      DoctorId: 1,
      DiseaseId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      DoctorId: 1,
      DiseaseId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      DoctorId: 1,
      DiseaseId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      DoctorId: 2,
      DiseaseId: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      DoctorId: 2,
      DiseaseId: 5,
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
