import ReactMapGL, { Marker, Layer } from "react-map-gl";
import { config } from "../Config/config";
import { useState, useEffect } from "react";

const Map = (props) => {
	const { data, mapPoints } = props;
	const [mapStyle, setMapStyle] = useState(
		"mapbox://styles/rsamhollyer/ckkprmd573gmw17mlcncjk8bz"
	);

	const [viewport, setViewport] = useState({
		latitude: 29.910577,
		longitude: -95.060882,
		zoom: 11,
		width: "90%",
		height: "90%",
	});
	useEffect(() => {
		if (data[0]) {
			setViewport({
				...viewport,
				latitude: data[0].lat,
				longitude: data[0].long,
			});
		}
	}, [data]);

	return (
		<div className="map-component">
			<div className="header">
				<h2>Drone Position</h2>
			</div>
			<ReactMapGL
				mapStyle={mapStyle}
				mapboxApiAccessToken={config.mapBox}
				{...viewport}
				onViewportChange={(nextViewport) => {
					setViewport(nextViewport);
				}}
			>
				{mapPoints.lat ? (
					<Marker latitude={mapPoints.lat} longitude={mapPoints.long}>
						<button key={mapPoints.key} className="marker-btn">
							<img src={"/black-drone.svg"} alt={"Drone Icon"} />
						</button>
					</Marker>
				) : (
					<Marker latitude={29.910577} longitude={-95.060882}>
						<button key={1} className="marker-btn">
							<img src={"/black-drone.svg"} alt={"Drone Icon"} />
						</button>
					</Marker>
				)}
			</ReactMapGL>
			<div className="footer">
				<button
					key={1}
					onClick={() => {
						setMapStyle(
							"mapbox://styles/rsamhollyer/ckkprmd573gmw17mlcncjk8bz"
						);
					}}
				>
					Click Me
				</button>
				<button
					key={2}
					onClick={() => {
						setMapStyle(
							"mapbox://styles/rsamhollyer/ckkprljfz7xoi17mjo6asbeub"
						);
					}}
				>
					Click Me
				</button>
				<button
					key={3}
					onClick={() => {
						setMapStyle(
							"mapbox://styles/rsamhollyer/ckkn1mivy5aml17mnueua6ovj"
						);
					}}
				>
					Click Me
				</button>
			</div>
		</div>
	);
};

export default Map;
