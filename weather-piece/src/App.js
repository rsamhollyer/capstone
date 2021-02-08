import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Weather } from "./Components/Weather";
import Header from "./Components/Header";
import FlightPicker from "./Components/FlightPicker";
import FlightDuration from "./Components/FlightDuration";
import SingleStat from "./Components/SingleStat";
import GraphComponent from "./Components/GraphComponent";
import Map from "./Components/Map";

function App() {
	const [activeDrone, setActiveDrone] = useState();
	const [weather, setWeather] = useState(null);
	const [data, setData] = useState([]);
	const [speedChartData, setSpeedChartData] = useState([{ x: 0, y: 0 }]);
	const [altChartData, setAltChartData] = useState([{ x: 0, y: 0 }]);
	const [motorTempChartData, setMotorTempChartData] = useState([
		{ x: 0, y: 0 },
	]);
	const [index, setIndex] = useState(0);
	const [mapPoints, setMapPoints] = useState({});

	let dataLength = data.length;
	let current = data[index];

	const getWeather = async (units, lat, lon) => {
		const URL = `/api/weather`;
		const resp = await axios.get(URL, {
			params: { lat, lon, units },
		});
		setWeather(resp.data);
	};

	const getDrones = async (drone) => {
		const URL = "/api/drones/getdrones";
		const resp = await axios.get(URL, {
			params: { drone },
		});
		setActiveDrone(drone);
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
			<Header getWeather={getWeather} data={data} />
			<FlightPicker
				getDrones={getDrones}
				setSpeedChartData={setSpeedChartData}
				setAltChartData={setAltChartData}
				setMotorTempChartData={setMotorTempChartData}
				setIndex={setIndex}
				activeDrone={activeDrone}
			/>
			<SingleStat
				current={current}
				stat={`speed`}
				type={`speed`}
				good={0.5}
				caution={0.8}
				danger={1}
				className={"speed-component"}
				units={`FT/S`}
				fa={"fa-tachometer-alt"}
			/>
			<SingleStat
				current={current}
				stat={`alt`}
				type={`altitude`}
				good={300}
				caution={250}
				danger={50}
				className={"altitude-component"}
				units={`feet`}
				fa={"fa-plane-departure"}
			/>
			<SingleStat
				current={current}
				stat={`temp`}
				type={`Motor Temperature`}
				good={135}
				caution={150}
				danger={180}
				className={"motor-temp-component"}
				units={`°F`}
				fa={"fa-fire"}
			/>

			<FlightDuration current={current} />

			<GraphComponent
				chartData={speedChartData}
				graphClass={"speed-graph-component"}
				graphTitle={`Speed Graph`}
			/>
			<GraphComponent
				chartData={altChartData}
				graphClass={"alt-graph-comp"}
				graphTitle={`Alt. Graph`}
			/>
			<GraphComponent
				chartData={motorTempChartData}
				graphClass={"motor-graph-component"}
				graphTitle={`Motor Graph Comp.`}
			/>

			<Map data={data} mapPoints={mapPoints} />
			<Weather weather={weather} />
		</main>
	);
}

export default App;
