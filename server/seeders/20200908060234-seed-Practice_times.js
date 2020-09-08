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
    return queryInterface.bulkInsert('Practice_times', [
      {
        day: 'Kamis',
        time: "09:00-12:00",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        day: 'Jumat',
        time: "10:00-12:00",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        day: 'Sabtu',
        time: "08:00-12:00",
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
    return queryInterface.bulkDelete('Practice_times', null, {});

  }
};
