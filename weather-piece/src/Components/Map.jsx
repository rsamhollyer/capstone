import ReactMapGL, { Marker } from "react-map-gl";
import { config } from "../Config/config";
import { useState, useEffect } from "react";

const Map = (props) => {
	const [activeStyle, setActiveStyle] = useState("Monochrome");
	const [mapStyle, setMapStyle] = useState(
		"mapbox://styles/rsamhollyer/ckkprmd573gmw17mlcncjk8bz"
	);

	const { data, mapPoints, lastLoc, setLastLoc } = props;

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

	useEffect(() => {
		setLastLoc([...lastLoc, mapPoints]);
	}, [mapPoints]);

	return (
		<div className="map-component">
			<div className="heading">
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
				{lastLoc.length > 0
					? lastLoc.map((loc) => {
							return loc.lat ? (
								<Marker latitude={loc.lat} longitude={loc.long} offsetLeft={8}>
									<button key={loc.key + " old"} className="marker-btn">
										<img
											style={{
												width: "2px",
												height: "2px",
											}}
											src={"/reddot.png"}
											alt={"Drone Icon"}
										/>
									</button>
								</Marker>
							) : null;
					  })
					: null}
			</ReactMapGL>
			<div className="footer">
				<button
					className={
						"Monochrome" === activeStyle
							? `flight-button flight-button-slide active`
							: `flight-button flight-button-slide`
					}
					onClick={() => {
						setMapStyle(
							"mapbox://styles/rsamhollyer/ckkprmd573gmw17mlcncjk8bz"
						);
						setActiveStyle("Monochrome");
					}}
				>
					Monochrome
				</button>

				<button
					className={
						"Satellite" === activeStyle
							? `flight-button flight-button-slide active`
							: `flight-button flight-button-slide`
					}
					onClick={() => {
						setMapStyle(
							"mapbox://styles/rsamhollyer/ckkprljfz7xoi17mjo6asbeub"
						);
						setActiveStyle("Satellite");
					}}
				>
					Satellite
				</button>

				<button
					className={
						"Outdoors" === activeStyle
							? `flight-button flight-button-slide active`
							: `flight-button flight-button-slide`
					}
					onClick={() => {
						setMapStyle(
							"mapbox://styles/rsamhollyer/ckkn1mivy5aml17mnueua6ovj"
						);
						setActiveStyle("Outdoors");
					}}
				>
					Outdoors
				</button>
				{/* <MapStyleButton
					key={1}
					stylename={"Monochrone"}
					stylelink={"mapbox://styles/rsamhollyer/ckkprmd573gmw17mlcncjk8bz"}
					setMapStyle={setMapStyle}
					setActiveStyle={setActiveStyle}
					activeStyle={activeStyle}
				/>
				<MapStyleButton
					key={2}
					stylename={"Satellite"}
					stylelink={"mapbox://styles/rsamhollyer/ckkprljfz7xoi17mjo6asbeub"}
					setMapStyle={setMapStyle}
					setActiveStyle={setActiveStyle}
					activeStyle={activeStyle}
				/>
				<MapStyleButton
					key={3}
					stylename={"Outdoors"}
					stylelink={"mapbox://styles/rsamhollyer/ckkn1mivy5aml17mnueua6ovj"}
					setMapStyle={setMapStyle}
					setActiveStyle={setActiveStyle}
					activeStyle={activeStyle}
				/> */}
			</div>
		</div>
	);
};

export default Map;
