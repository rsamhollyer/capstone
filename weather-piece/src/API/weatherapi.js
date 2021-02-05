import axios from "axios";
import { config } from "../Config/config.js";

export const getWeather = async (units, zipcode, set) => {
	const url = "https://api.openweathermap.org/data/2.5/weather?";
	const resp = axios.get(
		`${url}zip=${zipcode}&appid=${config.weatherKey}&units=${units}`
	);
	set(resp.data);
};
