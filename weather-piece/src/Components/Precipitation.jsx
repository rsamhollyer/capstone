const Precipitation = (props) => {
	const { weather } = props;
	const rain = weather.rain?.["1h"];
	const snow = weather.snow?.["1h"];

	const precip = rain || snow || 0;

	return <h3>{precip} mm</h3>;
};

export default Precipitation;
