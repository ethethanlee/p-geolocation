import React, { Component } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> be240e9 (hi)
/**
 * Initializes and loads a Google map with a marker on a specified location embedded in the webpage
 */
export class MapComponent extends Component {
<<<<<<< HEAD
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
  
=======
class MapComponent extends Component {
=======
>>>>>>> be240e9 (hi)
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

    this.loader.load().then(() => {
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
>>>>>>> e72793c (new new map component)

  render() {
    console.log('Rendering component');
    return (
      <div>
<<<<<<< HEAD
        <h1>Hi! Here is a map component hello hello: </h1> <br />
        {/* <MapComponent /> */}
=======
        <h1>Here is your location:</h1>
<<<<<<< HEAD
        <div id="map" style={{ width: '100%', height: '550px' }}></div>
>>>>>>> e72793c (new new map component)
=======
        <div id='map' style={{ width: '100%', height: '550px' }}></div>
>>>>>>> be240e9 (hi)
      </div>
    );
  }
}

<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> faa2d2d (map w api key)
export default MapComponent;
=======
export default MapComponent;
>>>>>>> e72793c (new new map component)
=======
>>>>>>> be240e9 (hi)
