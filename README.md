# Drone Dash

This project was the capstone in my DigitalCrafts bootcamp. It was truly an interesting and fun way to finish out the 16-weeks and showcase my skills in a short window. The app uses the entire stack; the front is React, the back is Node/Express, and PostgreSQL handles the big data. While I'm happy with this start, there is more work that can be done to make this even better.

## Features

<br>

### APIs

- [Mapbox / React-Map-GL](https://visgl.github.io/react-map-gl/)
- [OpenWeather](https://openweathermap.org/)

Mapbox uses the React Map GL wrapper in React and this is what renders the drone icon on screen. While the app is running a drone flight, it dynamically changes the map position of a drone icon on the screen. I thought this library would work better since it was a library that was created for Mapbox by Uber, and I'm pretty happy with how it turned out as well as the ease of implementation.

OpenWeather is a simple dataset that has plenty of endpoints for gathering many different weather data points that you could find interesting. I included it because I wanted to give users a quick weather overview of their location so they would be able to fly without inclement weather issues.
