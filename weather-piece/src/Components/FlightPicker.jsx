import FlightPickerButton from "./FlightPickerButton";
import { useEffect, useState } from "react";
import axios from "axios";

export default function FlightPicker(props) {
	const [droneNames, setDromeNames] = useState([]);
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
		setDromeNames(resp.data);
	};

	useEffect(() => {
		getDroneNames();
	}, []);

	return (
		<div className="picker-component">
			{droneNames.length > 0
				? droneNames.map((drone) => {
						return (
							<FlightPickerButton
								getDrones={getDrones}
								setSpeedChartData={setSpeedChartData}
								setAltChartData={setAltChartData}
								setMotorTempChartData={setMotorTempChartData}
								setIndex={setIndex}
								droneName={drone.droneName}
								activeDrone={activeDrone}
							/>
						);
				  })
				: null}
		</div>
	);
}
