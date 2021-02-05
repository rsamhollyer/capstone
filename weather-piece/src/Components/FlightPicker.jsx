import FlightPickerButton from "./FlightPickerButton";

export default function FlightPicker(props) {
	const {
		getDrones,
		setSpeedChartData,
		setAltChartData,
		setMotorTempChartData,
		setIndex,
	} = props;
	return (
		<div className="picker-component">
			<FlightPickerButton
				getDrones={getDrones}
				setSpeedChartData={setSpeedChartData}
				setAltChartData={setAltChartData}
				setMotorTempChartData={setMotorTempChartData}
				setIndex={setIndex}
				droneNumber={1}
			/>
			<FlightPickerButton
				getDrones={getDrones}
				setSpeedChartData={setSpeedChartData}
				setAltChartData={setAltChartData}
				setMotorTempChartData={setMotorTempChartData}
				setIndex={setIndex}
				droneNumber={2}
			/>
			<FlightPickerButton
				getDrones={getDrones}
				setSpeedChartData={setSpeedChartData}
				setAltChartData={setAltChartData}
				setMotorTempChartData={setMotorTempChartData}
				setIndex={setIndex}
				droneNumber={3}
			/>
			<FlightPickerButton
				getDrones={getDrones}
				setSpeedChartData={setSpeedChartData}
				setAltChartData={setAltChartData}
				setMotorTempChartData={setMotorTempChartData}
				setIndex={setIndex}
				droneNumber={4}
			/>
			<FlightPickerButton
				getDrones={getDrones}
				setSpeedChartData={setSpeedChartData}
				setAltChartData={setAltChartData}
				setMotorTempChartData={setMotorTempChartData}
				setIndex={setIndex}
				droneNumber={5}
			/>
		</div>
	);
}
