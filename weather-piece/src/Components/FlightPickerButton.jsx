export default function FlightPickerButton(props) {
	const {
		getDrones,
		setSpeedChartData,
		setAltChartData,
		setMotorTempChartData,
		setIndex,
		droneNumber,
	} = props;
	return (
		<button
			className="flight-button flight-button-slide"
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
