const axios = require("axios");
const { WEATHER_KEY } = process.env;

const getWeather = async (req, res) => {
	const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_KEY}&units=${units}`;
	const resp = await axios.get(URL);

	res.json(resp.data);
};

module.exports = {
	getWeather,
};
