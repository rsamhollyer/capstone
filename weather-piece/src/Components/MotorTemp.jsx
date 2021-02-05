import { useState, useEffect } from "react";

const MotorTemp = (props) => {
	const { current } = props;
	const [state, setState] = useState(0);
	let color;
	let background;

	useEffect(() => {
		if (current) {
			setState(current.temp);
		}
	}, [current]);

	if (state < 135) {
		color = "good";
		background = "good-background";
	} else if (state < 0.15) {
		color = "caution";
		background = "caution-background";
	} else {
		color = "danger";
		background = "danger-background";
	}

	return (
		<div className="motor-temp-component single-stat-panel">
			<div className="text-area">
				<h3 className="component-header">Motor Temperature</h3>
				<h2 className={`read-out-info ${color}`}>
					{current ? current.temp.toFixed(2) : 0} <span>°F</span>
				</h2>
			</div>

			<div className={`icon-area ${background}`}>
				<span className="component-icon fas fa-fire"></span>
			</div>
		</div>
	);
};

export default MotorTemp;
