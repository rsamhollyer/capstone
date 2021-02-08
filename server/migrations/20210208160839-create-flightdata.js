"use strict";
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("Flightdata", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			long: {
				type: Sequelize.FLOAT,
			},
			speed: {
				type: Sequelize.FLOAT,
			},
			temp: {
				type: Sequelize.FLOAT,
			},
			lat: {
				type: Sequelize.FLOAT,
			},
			alt: {
				type: Sequelize.FLOAT,
			},
			time: {
				type: Sequelize.INTEGER,
			},
			droneName: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("Flightdata");
	},
};
