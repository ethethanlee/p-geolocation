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
    this.initMap();
  }

  initMap() {
    console.log('Initializing map');

    this.loader.load().then(async () => {
      console.log('Google Maps loaded');
      const position = { lat: 34.100010, lng: -117.714802 };

      // Create a map
      this.map = new window.google.maps.Map(document.getElementById('map'), {
        zoom: 17,
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
    });
  }

  render() {
    console.log('Rendering component');
    return (
      <div>
        <h1>Here is your location:</h1>
        <div id='map' style={{ width: '100%', height: '550px' }}></div>
      </div>
    );
  }
}


