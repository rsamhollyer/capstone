import { useState, useEffect } from "react";

export default function SingleStat(props) {
	const {
		current,
		stat,
		type,
		good,
		caution,
		danger,
		className,
		units,
		fa,
	} = props;
	const [state, setState] = useState(0);

	let color;
	let background;

	useEffect(() => {
		if (current) {
			setState(current[`${stat}`]);
		}
	}, [current]);

	if (type === `altitude`) {
		if (state < `${danger}`) {
			color = "danger";
			background = "danger-background";
		} else if (state < `${caution}`) {
			color = "caution";
			background = "caution-background";
		} else {
			color = "good";
			background = "good-background";
		}
	} else {
		if (state < `${good}`) {
			color = "good";
			background = "good-background";
		} else if (state < `${caution}`) {
			color = "caution";
			background = "caution-background";
		} else {
			color = "good";
			background = "good-background";
		}
	}

	return (
		<div className={`${className} single-stat-panel`}>
			<div className="text-area">
				<h3 className="component-header">{type.toUpperCase()}</h3>
				<h2 className={`read-out-info ${color}`}>
					{current ? current[`${stat}`].toFixed(2) : 0}
					<span>{units}</span>
				</h2>
			</div>

			<div className={`icon-area ${background}`}>
				<span className={`component-icon fas ${fa}`}></span>
			</div>
		</div>
	);
}
