'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.addConstraint('Work_Places', {
      fields: ['DoctorId'],
      type: 'foreign key',
      name: 'FK_doctor_id',
      references: { 
        table: 'Doctors',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })
    .then ( () =>{
      return queryInterface.addConstraint('Work_Places', {
        fields: ['HospitalId'],
        type: 'foreign key',
        name: 'FK_hospital_id',
        references: { 
          table: 'Hospitals',
          field: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
    })
  },

  down:  (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.removeConstraint('Work_Places', 'FK_doctor_id')
    .then( () => {
      return queryInterface.removeConstraint('Work_Places', 'FK_hospital_id')
    })

  }
};
