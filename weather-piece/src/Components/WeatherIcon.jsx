import React from "react";

export default function WeatherIcon(props) {
	const { main } = props;

	return (
		<div style={{ fontSize: "3rem" }}>
			{
				{
					Thunderstorm: (
						<img
							style={{
								width: "50px",
								height: "50px",
							}}
							src="../weathericons/thunderstorm.svg"
							alt="Clouds"
						/>
					),
					Drizzle: (
						<img
							style={{
								width: "50px",
								height: "50px",
							}}
							src="../weathericons/drizzle.svg"
							alt="Clouds"
						/>
					),
					Rain: (
						<img
							style={{
								width: "50px",
								height: "50px",
							}}
							src="../weathericons/rain.svg"
							alt="Clouds"
						/>
					),
					Snow: (
						<img
							style={{
								width: "50px",
								height: "50px",
							}}
							src="../weathericons/snow.svg"
							alt="Clouds"
						/>
					),
					Mist: (
						<img
							style={{
								width: "50px",
								height: "50px",
							}}
							src="../weathericons/mist.svg"
							alt="Clouds"
						/>
					),
					Smoke: (
						<img
							style={{
								width: "50px",
								height: "50px",
							}}
							src="../weathericons/smoke.svg"
							alt="Clouds"
						/>
					),
					Haze: (
						<img
							style={{
								width: "50px",
								height: "50px",
							}}
							src="../weathericons/mist.svg"
							alt="Clouds"
						/>
					),
					Dust: (
						<img
							style={{
								width: "50px",
								height: "50px",
							}}
							src="../weathericons/smoke.svg"
							alt="Clouds"
						/>
					),
					Fog: (
						<img
							style={{
								width: "50px",
								height: "50px",
							}}
							src="../weathericons/mist.svg"
							alt="Clouds"
						/>
					),
					Sand: (
						<img
							style={{
								width: "50px",
								height: "50px",
							}}
							src="../weathericons/smoke.svg"
							alt="Clouds"
						/>
					),
					Ash: (
						<img
							style={{
								width: "50px",
								height: "50px",
							}}
							src="../weathericons/smoke.svg"
							alt="Clouds"
						/>
					),
					Squall: (
						<img
							style={{
								width: "50px",
								height: "50px",
							}}
							src="../weathericons/squall.svg"
							alt="Clouds"
						/>
					),
					Tornado: (
						<img
							style={{
								width: "50px",
								height: "50px",
							}}
							src="../weathericons/tornado.svg"
							alt="Clouds"
						/>
					),
					Clear: (
						<img
							style={{
								width: "50px",
								height: "50px",
							}}
							src="../weathericons/clear.svg"
							alt="Clouds"
						/>
					),
					Clouds: (
						<img
							style={{
								width: "50px",
								height: "50px",
							}}
							src="../weathericons/clouds.svg"
							alt="Clouds"
						/>
					),
				}[main]
			}
		</div>
	);
}
