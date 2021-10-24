'use strict';

const { query } = require("express");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('funcionarios', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      idade: {
        type: Sequelize.INTEGER,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cargo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('funcionarios');
  }
};
