const getDrones = (req, res) => {
	let { drone } = req.query;
	drone = parseInt(drone);

	let droneData = "something";

	switch (drone) {
		case 1:
			droneData = require("../public/data/2013_04_14_merlischachen.kml.json");
			break;

		case 2:
			droneData = require("../public/data/2014_08_21_rtk_vrs_2.5cm_fact2.5.kml.json");
			break;

		case 3:
			droneData = require("../public/data/EP-00-00012_0119.kml.json");
			break;

		case 4:
			droneData = require("../public/data/aletsch_27_10_vrs_ppk.kml.json");
			break;

		case 5:
			droneData = require("../public/data/corridor_orient.kml.json");
			break;

		default:
			return;
	}

	res.json(droneData);
};

module.exports = {
	getDrones,
};
