import React from 'react';

export const AboutPage = () => {
    return (
      <div>
        <h2>About p-geolocation</h2>
        <p>
          Welcome to p-geolocation! This project aims to utilize a user's coordinates to display their location on a Google Maps embedded within this website.
        </p>
        <p>
          By leveraging the Geolocation API provided by modern web browsers, we're able to retrieve the user's current latitude and longitude. Using this information, we plot a marker on the map, pinpointing the user's location.
        </p>
        <p>
          This project utilizes React JavaScript to create an interactive and dynamic user interface, integrating Google Maps to display the geographical information fetched from the user's device.
        </p>
        <p>
          Feel free to explore the map functionality and enjoy using p-geolocation!
        </p>
      </div>
    );
  };