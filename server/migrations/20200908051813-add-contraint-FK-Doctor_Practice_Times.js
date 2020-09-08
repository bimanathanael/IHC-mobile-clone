'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.addConstraint('Docktor_Practice_Times', {
      fields: ['DoctorId'],
      type: 'foreign key',
      name: 'FK_doctor_id2',
      references: { 
        table: 'Doctors',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })
    .then ( () =>{
      return queryInterface.addConstraint('Docktor_Practice_Times', {
        fields: ['PracticeTimeId'],
        type: 'foreign key',
        name: 'FK_practice_time_id',
        references: { 
          table: 'Practice_times',
          field: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.removeConstraint('Docktor_Practice_Times', 'FK_doctor_id2')
    .then( () => {
      return queryInterface.removeConstraint('Docktor_Practice_Times', 'FK_practice_time_id')
    })
  }
};
