import { VictoryChart, VictoryLine, VictoryTheme } from "victory";

const AltitudeGraph = (props) => {
	const { chartData } = props;
	return (
		<div className="alt-graph-comp">
			<h2>Alt. Graph</h2>
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
};

export default AltitudeGraph;
