'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.addConstraint('Disease_Specialties', {
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
      return queryInterface.addConstraint('Disease_Specialties', {
        fields: ['DiseaseId'],
        type: 'foreign key',
        name: 'FK_disease_id',
        references: { 
          table: 'Diseases',
          field: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
    })
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.removeConstraint('Disease_Specialties', 'FK_doctor_id')
    .then( () => {
      return queryInterface.removeConstraint('Disease_Specialties', 'FK_disease_id')
    })
  }
};
