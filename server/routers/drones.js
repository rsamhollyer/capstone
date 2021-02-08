const express = require("express");
const router = express.Router();

const { droneControllers } = require("../controllers");

router
	.get("/getdrones", droneControllers.getDrones)
	.get("/dronenames", droneControllers.getDroneNames);

module.exports = router;
