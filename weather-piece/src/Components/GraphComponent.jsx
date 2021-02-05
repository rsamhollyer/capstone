import { VictoryChart, VictoryLine, VictoryTheme } from "victory";

export default function GraphComponent(props) {
	const { chartData, graphClass, graphTitle } = props;

	return (
		<div className={`${graphClass}`}>
			<h2>{graphTitle}</h2>
			<VictoryChart theme={VictoryTheme.material}>
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
