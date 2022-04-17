'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('usuarios', {
      type: 'foreign key',
      fields: ['cursoId'],
      name: 'curso_id_fk',
      references: {
      table: 'cursos',
      field: 'id'
      },
      onDelete: 'restrict',
      onUpdate: 'restrict'
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.addConstraint('usuarios', 'foreign key');
  }
};
