import { VictoryChart, VictoryLine, VictoryTheme } from "victory";

const SpeedGraph = (props) => {
	const { chartData } = props;

	return (
		<div className="speed-graph-component">
			<h2>Speed Graph</h2>

			<VictoryChart theme={VictoryTheme.material}>
				<VictoryLine
					style={{
						data: { stroke: "#c43a31", fontWeight: "bold" },
						parent: { border: "1px solid #ccc" },
					}}
					data={chartData}
					scale={{ x: "linear", y: "linear" }}
				/>
			</VictoryChart>
		</div>
	);
};
export default SpeedGraph;
