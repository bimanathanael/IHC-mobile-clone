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
   return queryInterface.bulkInsert('Work_Places', [
    {
      DoctorId: 1,
      HospitalId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      DoctorId: 1,
      HospitalId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      DoctorId: 1,
      HospitalId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      DoctorId: 2,
      HospitalId: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      DoctorId: 2,
      HospitalId: 5,
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
    return queryInterface.bulkDelete('Work_Places', null, {});

  }
};
