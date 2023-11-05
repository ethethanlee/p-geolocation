import React, { Component } from 'react';

export class MapComponent extends Component {

  initMap() { 
    console.log("initMap is called");
  }
  
  async componentDidMount() {
    console.log('componentDidMount is called');
    const googleMapsAPI = await loadGoogleMapsAPI();
    if (!googleMapsAPI) {
      console.error('Failed to load Google Maps API');
      return;
    }

    const position = { lat: 40.183506, lng: 22.127185 };
    console.log('Position:', position);

    // centering map
    const map = new googleMapsAPI.Map(document.getElementById("map"), {
      zoom: 4,
      center: position,
      mapId: "estella",
    });
    console.log('Map:', map);

    // marker
    new googleMapsAPI.Marker({
      position: position,
      map: map,
      title: "Estella",
    });
    console.log('Marker', position)
    
    async function loadGoogleMapsAPI() {
      if (window.google) {
        console.log("Google Maps API loaded.");
        return window.google.maps;
      }
    
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        const api_key = process.env.api_key;
          console.log(api_key);
        script.src = script.src = 'https://maps.googleapis.com/maps/api/js?key='+api_key+'&libraries=maps&callback=initMap';
        ;
        script.async = true;
        script.defer = true;
        script.onerror = reject;
        window.initMap = () => {
          console.log("Google Maps API loaded successfully.");
          resolve(window.google.maps);
          delete window.initMap;
        };
    
        document.head.appendChild(script);
      });
    }
  }

  render() {
    return (
      <div>
        <h1>Hi! Here is a map component: </h1>
        <div id="map" style={{ width: '100%', height: '400px' }}></div>
      </div>
    );
  }
}


export default MapComponent;