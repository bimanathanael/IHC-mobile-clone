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
   return queryInterface.bulkInsert('Doctor_Types', [
    {
      name: 'Dokter Umum',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Dokter Gigi',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Dokter Spesialis Jantung',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Dokter Spesialis Kulit dan Kelamin',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Dokter Spesialis THT',
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
    return queryInterface.bulkDelete('Doctor_Types', null, {});
  }
};
