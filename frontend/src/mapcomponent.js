import React, { Component } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

/**
 * Initializes and loads a Google map with a marker on a specified location embedded in the webpage
 */

export class MapComponent extends Component {
  constructor(props) {
    super(props);
    this.map = null;
    this.loader = new Loader({  
      apiKey: process.env.REACT_APP_API_KEY, 
      version: 'weekly',
      libraries: ['places'],
    });
  }

  componentDidMount() {
    console.log('Component did mount');
    console.log(process.env.REACT_APP_API_KEY);
    this.initMap();
  }

  initMap() {
    console.log('Initializing map');

    this.loader.load().then(async () => {
      console.log('Google Maps loaded');
      const position = { lat: this.props.coordinates[0], lng: this.props.coordinates[1] };

      // Create a map
      this.map = new window.google.maps.Map(document.getElementById('map'), {
        zoom: 5,
        center: position,
        mapId: 'estella',
      });

      console.log('Map initialized');

      // Create a marker
      new window.google.maps.Marker({
        position: position,
        map: this.map,
        title: 'Estella',
      });

      this.circle = new window.google.maps.Circle({
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
        map: this.map,
        center: position,
        radius: 400000, // Specify the radius in meters
      });
    });
  }

  render() {
    console.log('Rendering component');
    return (
      <div>
        <h1>Here is your location:</h1>
        <div id='map' style={{ width: '1400px', height: '420px', borderRadius: '30px'}}></div>
      </div>
    );
  }
}


