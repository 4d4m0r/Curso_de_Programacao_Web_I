'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('partidas', {
      type: 'foreign key',
      fields: ['usuarioId'],
      name: 'usuario_id_fk',
      references: {
      table: 'usuarios',
      field: 'id'
      },
      onDelete: 'restrict',
      onUpdate: 'restrict'
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.addConstraint('partidas', 'foreign key');
  }
};
