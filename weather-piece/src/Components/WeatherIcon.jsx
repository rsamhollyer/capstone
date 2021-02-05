import React from "react";

export default function WeatherIcon(props) {
	const { main } = props;

	return (
		<div style={{ fontSize: "3rem" }}>
			{
				{
					Thunderstorm: (
						<i
							style={{ color: "hsla(209, 71%, 19%, 1)" }}
							className="fas fa-poo-storm"
						></i>
					),
					Drizzle: (
						<i
							style={{ color: "hsla(209, 54%, 41%, 1)" }}
							className="fas fa-cloud-rain"
						></i>
					),
					Rain: (
						<i
							style={{ color: "hsla(209, 54%, 26%, 1)" }}
							className="fas fa-cloud-showers-heavy"
						></i>
					),
					Snow: (
						<i
							style={{ color: "hsla(255, 84%, 68%, 1)" }}
							className="far fa-snowflake"
						></i>
					),
					Mist: (
						<i
							style={{ color: "hsla(210, 33%, 33%, 1)" }}
							className="fas fa-smog"
						></i>
					),
					Smoke: (
						<i
							style={{ color: "hsla(306, 4%, 19%, 1)" }}
							className="fas fa-smog"
						></i>
					),
					Haze: (
						<i
							style={{ color: "hsla(306, 4%, 19%, 1)" }}
							className="fas fa-smog"
						></i>
					),
					Dust: (
						<i
							style={{ color: "hsla(53, 71%, 75%, 1)" }}
							className="fas fa-smog"
						></i>
					),
					Fog: (
						<i
							style={{ color: "hsla(306, 4%, 19%, 1)" }}
							className="fas fa-smog"
						></i>
					),
					Sand: (
						<i
							style={{ color: "hsla(53, 71%, 75%, 1)" }}
							className="fas fa-smog"
						></i>
					),
					Ash: (
						<i
							style={{ color: "hsla(306, 4%, 19%, 1)" }}
							className="fas fa-smog"
						></i>
					),
					Squall: (
						<i
							style={{ color: "hsla(199, 95%, 71%, 1)" }}
							className="fas fa-wind"
						></i>
					),
					Tornado: (
						<i
							style={{ color: "hsla(0, 85%, 25%, 1)" }}
							className="fas fa-exclamation"
						></i>
					),
					Clear: (
						<i
							style={{ color: "hsla(61, 100%, 47%, 1)" }}
							className="fas fa-sun"
						></i>
					),
					Clouds: (
						<i
							style={{ color: "hsla(224, 0%, 15%, 1)" }}
							className="fas fa-cloud"
						></i>
					),
				}[main]
			}
		</div>
	);
}
