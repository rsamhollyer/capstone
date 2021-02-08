'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Flightdata', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      long: {
        type: Sequelize.STRING
      },
      speed: {
        type: Sequelize.STRING
      },
      temp: {
        type: Sequelize.STRING
      },
      lat: {
        type: Sequelize.STRING
      },
      alt: {
        type: Sequelize.STRING
      },
      time: {
        type: Sequelize.STRING
      },
      droneName: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Flightdata');
  }
};