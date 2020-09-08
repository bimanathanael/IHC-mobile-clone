'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
    * Add seed commands here.
    *
    * Example:
    * await queryInterface.bulkInsert('People', [{
    * name: 'John Doe',
    * isBetaMember: false
    * }], {});
    */
    return queryInterface.bulkInsert('Doctors', [
      {
        name: 'dr. Agieta Zulkifli,SpTHT-KL',
        photo: 'https://www.smarterhealth.id/wp-content/uploads/2020/03/124-Agieta-Zulkifli-.jpg',
        gender: 'Wanita',
        TypeId: 1,
        HospitalId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'dr. Adisti M R, SpTHT-KL(K)',
        photo: 'https://static.konsula.com/images/doctor/0001002000/0001001613/dr-fiastuti-isbandi-witjaksono-spgk.600x800.jpg',
        gender: 'Wanita',
        TypeId: 1,
        HospitalId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'DR dr. Mirta H, SpTHT-KL(K)',
        photo: 'data:image/jpeg;base64,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',
        gender: 'Pria',
        TypeId: 1,
        HospitalId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'dr. Bima Nathanael,SpTHT-KL',
        photo: '',
        gender: 'Pria',
        TypeId: 1,
        HospitalId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'dr. Nathanael Bima,SpTHT-KL Selatan',
        photo: '',
        gender: 'Pria',
        TypeId: 1,
        HospitalId: 1,
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
    return queryInterface.bulkDelete('Doctors', null, {});

  }
};

