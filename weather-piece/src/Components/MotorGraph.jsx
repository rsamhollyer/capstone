import { VictoryChart, VictoryLine, VictoryTheme } from "victory";

const MotorGraph = (props) => {
	const { chartData } = props;
	return (
		<div className="motor-graph-component">
			<h2>Motor Graph Comp.</h2>
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

export default MotorGraph;
