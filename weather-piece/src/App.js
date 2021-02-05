import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Weather } from "./Components/Weather";
import Header from "./Components/Header";
import FlightPicker from "./Components/FlightPicker";
import Speed from "./Components/Speed";
import Altitude from "./Components/Altitude";
import MotorTemp from "./Components/MotorTemp";
import FlightDuration from "./Components/FlightDuration";
import SpeedGraph from "./Components/SpeedGraph";
import AltitudeGraph from "./Components/AltitudeGraph";
import MotorGraph from "./Components/MotorGraph";
import Map from "./Components/Map";
import { config } from "./Config/config";

function App() {
	const [weather, setWeather] = useState(null);
	const [data, setData] = useState([]);
	const [speedChartData, setSpeedChartData] = useState([{ x: 0, y: 0 }]);
	const [altChartData, setAltChartData] = useState([{ x: 0, y: 0 }]);
	const [motorTempChartData, setMotorTempChartData] = useState([
		{ x: 0, y: 0 },
	]);
	const [index, setIndex] = useState(0);
	const [mapPoints, setMapPoints] = useState({});

	const [isFlying, setFlying] = useState(false);

	let dataLength = data.length;
	let current = data[index];

	const getWeather = async (units, lat, lon) => {
		const resp = await axios.get(
			`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${config.weatherKey}&units=${units}`
		);
		setWeather(resp.data);
	};

	const getData = async (drone) => {
		let url;
		switch (drone) {
			case 1:
				url = "data/2013_04_14_merlischachen.kml.json";
				break;

			case 2:
				url = "data/2014_08_21_rtk_vrs_2.5cm_fact2.5.kml.json";
				break;

			case 3:
				url = "data/aletsch_27_10_vrs_ppk.kml.json";
				break;

			case 4:
				url = "data/corridor_orient.kml.json";
				break;

			case 5:
				url = "data/EP-00-00012_0119.kml.json";
				break;
			default:
				return;
		}
		const resp = await axios.get(url);
		setData(resp.data);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			if (index < dataLength - 1) {
				setIndex(index + 1);
				setSpeedChartData([
					...speedChartData,
					{
						x: data[index].time,
						y: data[index].speed,
					},
				]);
				setAltChartData([
					...altChartData,
					{
						x: data[index].time,
						y: data[index].alt,
					},
				]);
				setMotorTempChartData([
					...motorTempChartData,
					{
						x: data[index].time,
						y: data[index].temp,
					},
				]);
				setMapPoints({
					lat: data[index].lat,
					long: data[index].long,
					key: data[index].time,
				});
			} else {
				setIndex(0);
			}
		}, 250);
		return () => {
			clearInterval(interval);
		};
	}, [index, data]);

	return (
		<main className="app">
			<button
				style={{ fontSize: "3rem" }}
				onClick={() => {
					setFlying(true);
					// if (index < dataLength - 1) {
					// 	setIndex(index + 1);
					// 	setSpeedChartData([
					// 		...speedChartData,
					// 		{
					// 			x: data[index].time,
					// 			y: data[index].speed,
					// 		},
					// 	]);
					// 	setAltChartData([
					// 		...altChartData,
					// 		{
					// 			x: data[index].time,
					// 			y: data[index].alt,
					// 		},
					// 	]);
					// 	setMotorTempChartData([
					// 		...motorTempChartData,
					// 		{
					// 			x: data[index].time,
					// 			y: data[index].temp,
					// 		},
					// 	]);
					// 	setMapPoints({
					// 		lat: data[index].lat,
					// 		long: data[index].long,
					// 		key: data[index].time,
					// 	});
					// } else {
					// 	setIndex(0);
					// }
				}}
			>
				Click Me
			</button>
			<Header getWeather={getWeather} data={data} />
			<FlightPicker getData={getData} />
			<Speed current={current} />
			<Altitude current={current} />
			<MotorTemp current={current} />
			<FlightDuration current={current} />
			<SpeedGraph chartData={speedChartData} />
			<AltitudeGraph chartData={altChartData} />
			<MotorGraph chartData={motorTempChartData} />
			<Map data={data} mapPoints={mapPoints} />
			<Weather weather={weather} />
		</main>
	);
}

export default App;
