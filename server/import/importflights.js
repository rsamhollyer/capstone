// You'd want to do something like this after moving this directory to your project and copying all the recipe files to this directory.
require("dotenv").config();
const { Flightdata } = require("../models");

try {
	const fname = process.argv[2];
	const jsonData = require(fname);

	jsonData.forEach((obj) => {
		Flightdata.create({
			long: obj.long,
			speed: obj.speed,
			temp: obj.temp,
			lat: obj.lat,
			alt: obj.alt,
			time: obj.time,
			droneName: `Drone 5`,
		});
	});
} catch (e) {
	console.log("error", e);
}
