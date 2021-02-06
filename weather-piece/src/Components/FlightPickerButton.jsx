import { useState } from "react";

export default function FlightPickerButton(props) {
	const [isClicked, setIsClicked] = useState(false);

	const handleToggle = () => {
		setIsClicked(!isClicked);
	};

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
			className={
				isClicked
					? `flight-button flight-button-slide active`
					: `flight-button flight-button-slide`
			}
			onClick={() => {
				getDrones(droneNumber);
				setSpeedChartData([{ x: 0, y: 0 }]);
				setAltChartData([{ x: 0, y: 0 }]);
				setMotorTempChartData([{ x: 0, y: 0 }]);
				setIndex(0);
				handleToggle();
			}}
		>
			<span>Drone {droneNumber}</span>
		</button>
	);
}
