import React from 'react';
import { MapComponent } from '../mapcomponent'; // Adjust the path as needed

export const HomePage = ({ coordinates, locationInput, showMap, handleInputChange, fetchFunction, clickMap }) => {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to p-geolocation!</p>

      {/* Rest of your Home page content */}

      {/* Button to trigger the fetch function */}
      <label>
        Enter Image Path:
        <input type="text" value={locationInput} onChange={handleInputChange} />
      </label>
      <button onClick={fetchFunction}>Fetch Data!</button>

      {coordinates && (
        <div>
          <p>Latitude: {coordinates.longitude}</p>
          <p>Longitude: {coordinates.latitude}</p>
        </div>
      )}

      <button onClick={clickMap}>Show Map</button>

      {showMap && <MapComponent />}
    </div>
  );
};
