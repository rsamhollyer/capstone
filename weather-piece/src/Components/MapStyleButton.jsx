export default function MapStyleButton(props) {
	const {
		stylename,
		stylelink,
		setMapStyle,
		setActiveStyle,
		activeStyle,
	} = props;
	return (
		<button
			className={
				stylename === activeStyle
					? `flight-button flight-button-slide active`
					: `flight-button flight-button-slide`
			}
			onClick={() => {
				setMapStyle({ stylelink });
				setActiveStyle({ stylename });
			}}
		>
			{stylename}
		</button>
	);
}
