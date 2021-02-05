export default function FlightPicker(props) {
	const { getDrones } = props;
	return (
		<div className="picker-component">
			<button
				onClick={() => {
					getDrones(1);
				}}
			>
				Get Drone 1
			</button>
			<button
				onClick={() => {
					getDrones(2);
				}}
			>
				Get Drone 2
			</button>
			<button
				onClick={() => {
					getDrones(3);
				}}
			>
				Get Drone 3
			</button>
			<button
				onClick={() => {
					getDrones(4);
				}}
			>
				Get Drone 4
			</button>
			<button
				onClick={() => {
					getDrones(5);
				}}
			>
				Get Drone 5
			</button>
		</div>
	);
}
