import React, { Component } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

class MapComponent extends Component {
  constructor(props) {
    super(props);
    this.map = null;
  }

  componentDidMount() {
    this.initMap();
  }

  initMap() {
    const loader = new Loader({
      apiKey: process.env.api_key, // Replace with your Google Maps API key
      version: "weekly",
      libraries: ["places"],
    });

    loader.load().then(() => {
      const position = { lat: 34.100010, lng: -117.714802 };

      // Create a map
      this.map = new window.google.maps.Map(document.getElementById("map"), {
        zoom: 17,
        center: position,
        mapId: "estella",
      });

      // Create a marker
      new window.google.maps.Marker({
        position: position,
        map: this.map,
        title: "Estella",
      });
    });
  }

  render() {
    return (
      <div>
        <h1>Here is your location:</h1>
        <div id="map" style={{ width: '100%', height: '550px' }}></div>
      </div>
    );
  }
}

export default MapComponent;
