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
      showMap: false,
      selectedFiles: [],
    };

  }


  // onFileChange = (event) => {
  //   const files = event.target.files;
  //   if (files.length === 2) {
  //     this.setState({ selectedFiles: files });
  //   } else {
  //     alert('Please select exactly two files.');
  //     event.target.value = null; // Reset the file input
  //   }
  // };

  // handleInputChange = (event) => {
  //   this.setState({ locationInput: event.target.value });
  // };
  

  clickMap = () => {
    this.setState({ showMap: true });
  };

  render() {
    const { coordinates, showMap } = this.state;

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
                  showMap={showMap}
                  fetchFunction={this.onFileUpload}
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
