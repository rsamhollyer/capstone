export default function FlightPickerButton(props) {
	const {
		getDrones,
		setSpeedChartData,
		setAltChartData,
		setMotorTempChartData,
		setIndex,
		droneName,
		activeDrone,
		setLastLoc,
	} = props;

	return (
		<button
			className={
				droneName === activeDrone
					? `flight-button flight-button-slide active`
					: `flight-button flight-button-slide`
			}
			onClick={() => {
				getDrones(droneName);
				setSpeedChartData([{ x: 0, y: 0 }]);
				setAltChartData([{ x: 0, y: 0 }]);
				setMotorTempChartData([{ x: 0, y: 0 }]);
				setIndex(0);
				setLastLoc([]);
			}}
		>
			<span>{droneName}</span>
		</button>
	);
}
