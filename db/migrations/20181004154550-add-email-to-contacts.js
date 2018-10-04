'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.addColumn('Contacts', 'email', {
      type: Sequelize.STRING,
      allowNull: true,
    }),

  down: (queryInterface) => queryInterface.removeColumn('Contacts', 'email'),
};
