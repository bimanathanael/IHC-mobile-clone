'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.addConstraint('Specialties', {
      fields: ['doctor_id'],
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
      return queryInterface.addConstraint('Specialties', {
        fields: ['skill_id'],
        type: 'foreign key',
        name: 'FK_skill_id',
        references: { 
          table: 'Skills',
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
    return queryInterface.removeConstraint('Specialties', 'FK_doctor_id')
    .then( () => {
      return queryInterface.removeConstraint('Specialties', 'FK_skill_id')
    })
  }
};
