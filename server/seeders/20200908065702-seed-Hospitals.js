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
   return queryInterface.bulkInsert('Hospitals', [
    {
      name: 'RS Pusat Pertamina',
      location_id: 2,
      full_address: 'Jl. Kyai Maja No.43, RT.4/RW.8, Gunung, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12120',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Klinik Pertamedika',
      location_id: 2,
      full_address: 'JL. Sinabung II, No. 32 AF, Kebayoran Baru, RT.6/RW.5, Gunung, Kebayoran Baru, RT.6/RW.5, Gunung, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12120',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'RS Ibu dan Anak',
      location_id: 5,
      full_address: 'Jl. Cendrawasih Raya No.90, Sawah Lama, Kec. Ciputat, Kota Tangerang Selatan, Banten 15413',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'RS Siloam',
      location_id: 2,
      full_address: ' Jl. Garnisun Dalam No.2-3, RT.5/RW.4, Karet Semanggi, Setia Budi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12930',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'RS Pondok Indah',
      location_id: 2,
      full_address: 'Jl. Metro Duta Kav. UE, RT.4/RW.14, Pondok Indah, Kec. Kby. Lama, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12310n',
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
    return queryInterface.bulkDelete('Hospitals', null, {});

  }
};
