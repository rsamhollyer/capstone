export default function FlightPickerButton(props) {
	const {
		getDrones,
		setSpeedChartData,
		setAltChartData,
		setMotorTempChartData,
		setIndex,
		droneNumber,
		activeDrone,
	} = props;

	return (
		<button
			className={
				droneNumber === activeDrone
					? `flight-button flight-button-slide active`
					: `flight-button flight-button-slide`
			}
			onClick={() => {
				getDrones(droneNumber);
				setSpeedChartData([{ x: 0, y: 0 }]);
				setAltChartData([{ x: 0, y: 0 }]);
				setMotorTempChartData([{ x: 0, y: 0 }]);
				setIndex(0);
			}}
		>
			<span>Drone {droneNumber}</span>
		</button>
	);
}
