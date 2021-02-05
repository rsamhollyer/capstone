import WeatherIcon from "./WeatherIcon";
import Precipitation from "./Precipitation";
export const Weather = (props) => {
	const { weather } = props;
	return (
		<div className="weather-component">
			{weather && (
				<div className="weather-body">
					<div className="weather-name">
						<h2 className="city-name">{weather.name}</h2>
					</div>

					<div className="weather-info">
						<div className="weather-icon">
							<WeatherIcon main={weather.weather[0].main} />
						</div>
						<div className="current-info">
							<h4>{weather.weather[0].main} </h4>
							<h2>
								{" "}
								{Math.round(parseFloat(weather.main.temp)).toLocaleString()} °F
							</h2>
							<div className="temp-extremes">
								<h4>
									Low:{" "}
									{Math.round(
										parseFloat(weather.main.temp_min)
									).toLocaleString()}
								</h4>
								<h4>
									High:{" "}
									{Math.round(
										parseFloat(weather.main.temp_max)
									).toLocaleString()}
								</h4>
							</div>
						</div>
					</div>
					<div className="other-weather">
						<div className="small-weather-panel">
							<i className="fas fa-wind"></i>
							<h3>{weather.wind.speed} mph</h3>
							<h3>Direction: {weather.wind.deg}°</h3>
							{weather.wind.gust ? (
								<h4>Gusts:{weather.wind.gust}</h4>
							) : (
								<h4>Gusts: No Data</h4>
							)}
							<h4>Wind</h4>
						</div>
						<div className="small-weather-panel">
							<i className="fas fa-eye"></i>
							<h3>
								{(parseFloat(weather.visibility) / 1000).toLocaleString()} km
							</h3>
							<h4>Visibility</h4>
						</div>
						<div className="small-weather-panel">
							<i className="fas fa-tint"></i>
							<Precipitation weather={weather} />
							<h4>Precipitation</h4>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
