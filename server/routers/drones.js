const express = require("express");
const router = express.Router();

const { droneControllers } = require("../controllers");

router.get("/", droneControllers.getDrones);

module.exports = router;
