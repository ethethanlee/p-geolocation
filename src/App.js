import {MapComponent} from './mapcomponent';
import React, { Component } from 'react';

class App extends Component {
  // add a button to call function fetch. 
  // <button onclick=function>
  
  render() {

    fetch('/sun_data_route')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // Handle the data in your React app
    })
    .catch(error => {
      console.error('Error:', error);
    });

    return (
      <div>
        <h1>Hi! Welcome to p-geolocation. </h1> <br />
        <MapComponent />
      </div>
    );
  }
}
  

export default App;
