export default function FlightPicker(props) {
	const { getData } = props;
	return (
		<div className="picker-component">
			<button
				onClick={() => {
					getData(1);
				}}
			>
				Get Drone 1
			</button>
			<button
				onClick={() => {
					getData(2);
				}}
			>
				Get Drone 2
			</button>
			<button
				onClick={() => {
					getData(3);
				}}
			>
				Get Drone 3
			</button>
			<button
				onClick={() => {
					getData(4);
				}}
			>
				Get Drone 4
			</button>
			<button
				onClick={() => {
					getData(5);
				}}
			>
				Get Drone 5
			</button>
		</div>
	);
}
