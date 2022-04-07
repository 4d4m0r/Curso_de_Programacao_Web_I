'use strict';

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.sequelize.transaction((t) => {
          return Promise.all([
              queryInterface.addColumn('Cursos', 'sigla', {
                  type: Sequelize.STRING
              }, { transaction: t }),
              queryInterface.addColumn('Cursos', 'descricao', {
                  type: Sequelize.STRING,
              }, { transaction: t })
          ])
      })
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.sequelize.transaction((t) => {
          return Promise.all([
              queryInterface.removeColumn('Cursos', 'sigla', { transaction: t }),
              queryInterface.removeColumn('Cursos', 'descricao', { transaction: t })
          ])
      })
  }
};
