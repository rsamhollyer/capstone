const Sequelize = require("sequelize");
const { Flightdata } = require("../models");

const getDroneNames = async (req, res) => {
	try {
		const names = await Flightdata.findAll({
			attributes: [
				[Sequelize.fn("DISTINCT", Sequelize.col("droneName")), "droneName"],
			],
			order: [["droneName", "ASC"]],
		});
		res.json(names);
	} catch (e) {
		res.json(e);
	}
};

const getDrones = async (req, res) => {
	let { drone } = req.query;

	try {
		if (drone) {
			const drones = await Flightdata.findAll({
				where: { droneName: drone },
				order: [["time", "ASC"]],
			});

			res.json(drones);
		}
	} catch (e) {
		res.json({
			status: 500,
			message: e.message,
		});
	}
};

module.exports = {
	getDrones,
	getDroneNames,
};
