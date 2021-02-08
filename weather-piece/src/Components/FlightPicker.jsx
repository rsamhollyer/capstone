import FlightPickerButton from "./FlightPickerButton";
import { useEffect, useState } from "react";
import axios from "axios";

export default function FlightPicker(props) {
	const {
		getDrones,
		setSpeedChartData,
		setAltChartData,
		setMotorTempChartData,
		setIndex,
		activeDrone,
	} = props;

	const getDroneNames = async () => {
		const resp = await axios.get("api/drones/dronenames");
		console.log(resp.data);
	};

	useEffect(() => {
		getDroneNames();
	}, []);

	return (
		<div className="picker-component">
			<FlightPickerButton
				getDrones={getDrones}
				setSpeedChartData={setSpeedChartData}
				setAltChartData={setAltChartData}
				setMotorTempChartData={setMotorTempChartData}
				setIndex={setIndex}
				droneNumber={1}
				activeDrone={activeDrone}
			/>
			<FlightPickerButton
				getDrones={getDrones}
				setSpeedChartData={setSpeedChartData}
				setAltChartData={setAltChartData}
				setMotorTempChartData={setMotorTempChartData}
				setIndex={setIndex}
				droneNumber={2}
				activeDrone={activeDrone}
			/>
			<FlightPickerButton
				getDrones={getDrones}
				setSpeedChartData={setSpeedChartData}
				setAltChartData={setAltChartData}
				setMotorTempChartData={setMotorTempChartData}
				setIndex={setIndex}
				droneNumber={3}
				activeDrone={activeDrone}
			/>
			<FlightPickerButton
				getDrones={getDrones}
				setSpeedChartData={setSpeedChartData}
				setAltChartData={setAltChartData}
				setMotorTempChartData={setMotorTempChartData}
				setIndex={setIndex}
				droneNumber={4}
				activeDrone={activeDrone}
			/>
			<FlightPickerButton
				getDrones={getDrones}
				setSpeedChartData={setSpeedChartData}
				setAltChartData={setAltChartData}
				setMotorTempChartData={setMotorTempChartData}
				setIndex={setIndex}
				droneNumber={5}
				activeDrone={activeDrone}
			/>
		</div>
	);
}
