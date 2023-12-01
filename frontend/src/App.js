import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { HomePage } from './pages/HomePage';
import { Header } from './components/Header';
import { Background } from './components/Background';


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
          <Background />
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  coordinates={coordinates}
                  showMap={showMap}
                  // fetchFunction={this.onFileUpload}
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
