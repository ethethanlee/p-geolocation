import {MapComponent} from './mapcomponent';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { AboutPage } from './AboutPage';
import { ContactPage } from './ContactPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coordinates: null,
      locationInput: '', // assuming you have this state variable
    };
  }

  handleInputChange = (event) => {
    this.setState({ locationInput: event.target.value });
  };

  fetchFunction = () => {
    const { locationInput } = this.state;

    // Implement your fetch logic here
    fetch(`http://127.0.0.1:3000/sun_data_route/${encodeURIComponent(locationInput)}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // Handle the data in your React app
        this.setState({ coordinates : data });
      // Handle the data in your React app
      })
      .catch(error => {
        console.error('Error!!!:', error);
      });
        console.log('Fetching data...');
  };

  render() {
    // setting up variable
    const { coordinates, locationInput } = this.state;

    return (
      <div>
        <Router>
          <div>
            <nav>
              {/* Use Link components for navigation */}
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>

            {/* Define routes for different pages */}
            <Route path="/" exact component={App} />
            <Route path="/about" component={AboutPage} />
            <Route path="/contact" component={ContactPage} />
          </div>
        </Router>

        <div>
          <h1>Hi! Welcome to p-geolocation. Here is a map component: </h1> <br />

          <label>
            Enter Image Path:
            <input type="text" value={locationInput} onChange={this.handleInputChange} />
          </label>

          {/* Button to trigger the fetch function */}
          <button onClick={this.fetchFunction}>Fetch Data!</button>

          {/* Display Coordinates if they exist*/}
          {coordinates && (
            <div>
              <p>Latitude: {coordinates.longitude}</p>
              <p>Longitude: {coordinates.latitude}</p>
            </div>
          )}

          <MapComponent />
        </div>
      </div>
    );
  }
}
  

export default App;
