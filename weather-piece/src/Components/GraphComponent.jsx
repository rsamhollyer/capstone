import { VictoryChart, VictoryLine, VictoryTheme } from "victory";
import { useState, useEffect } from "react";

export default function GraphComponent(props) {
	const { chartData, graphClass, graphTitle } = props;
	const [domain, setDomain] = useState(0);

	useEffect(() => {
		if (graphTitle === `Speed Graph`) {
			setDomain(25);
		} else if (graphTitle === `Alt. Graph`) {
			setDomain(3000);
		} else {
			setDomain(200);
		}
	}, []);

	return (
		<div className={`${graphClass}`}>
			<div className="heading">
				<h2>{graphTitle}</h2>
			</div>
			<VictoryChart
				theme={VictoryTheme.material}
				domain={{ x: [0, 500], y: [0, `${domain}`] }}
			>
				<VictoryLine
					style={{
						data: { stroke: "#c43a31" },
						parent: { border: "1px solid #ccc" },
					}}
					data={chartData}
					scale={{ x: "linear", y: "linear" }}
				/>
			</VictoryChart>
		</div>
	);
}
