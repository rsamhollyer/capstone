import ReactMapGL, { Marker, Layer } from "react-map-gl";
import { config } from "../Config/config";
import { useState, useEffect } from "react";

const Map = (props) => {
	const { data, mapPoints } = props;
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

	// console.log(mapPoints);
	return (
		<div className="map-component">
			<ReactMapGL
				mapStyle="mapbox://styles/rsamhollyer/ckkprmd573gmw17mlcncjk8bz"
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
		</div>
	);
};

export default Map;
