require("dotenv").config();

// Getting Express ready
const http = require("http");
const express = require("express");
const app = express();
const morgan = require("morgan");
const server = http.createServer(app);
const logger = morgan("dev");
const PORT = 9999;
const HOST = "localhost";

//For Fav-Icon
const bodyParser = require("body-parser");
const favicon = require("serve-favicon");
const path = require("path");

//Routers
const { weatherRouter, droneRouter } = require("./routers");

//Fav-Icon
app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use(
	express.urlencoded({
		extended: true,
	})
);

app.use(logger);

app.use("/api/weather", weatherRouter);
app.use("/api/drones", droneRouter);

server.listen(PORT, HOST, () => {
	console.log(`Listening on http://${HOST}:${PORT}`);
});
