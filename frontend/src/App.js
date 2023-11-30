import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { HomePage } from './pages/HomePage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coordinates: null,
      locationInput: '',
      showMap: false,
    };
  }

  handleInputChange = (event) => {
    this.setState({ locationInput: event.target.value });
  };

  fetchFunction = () => {
    const { locationInput } = this.state;

    fetch(`http://127.0.0.1:3000/sun_data_route/${encodeURIComponent(locationInput)}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ coordinates: data, showMap: true });
      })
      .catch(error => {
        console.error('Error!!!:', error);
      });
    console.log('Fetching data...');
  };

  clickMap = () => {
    this.setState({ showMap: true });
  };

  render() {
    const { coordinates, locationInput, showMap } = this.state;

    return (
      <Router>
        <div>
          <nav>
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

          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  coordinates={coordinates}
                  locationInput={locationInput}
                  showMap={showMap}
                  handleInputChange={this.handleInputChange}
                  fetchFunction={this.fetchFunction}
                  clickMap={this.clickMap}
                />
              }
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
