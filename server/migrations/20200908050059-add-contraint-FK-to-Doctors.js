'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     *  queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.addConstraint('Doctors', {
      fields: ['TypeId'],
      type: 'foreign key',
      name: 'FK_type_id',
      references: { 
        table: 'Doctor_Types',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     *  queryInterface.dropTable('users');
     */
    return queryInterface.removeConstraint('Doctors', 'FK_type_id');
  }
};
