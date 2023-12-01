import React, { Component } from 'react';
import { MapComponent } from '../mapcomponent'; // Adjust the path as needed

export class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showMap: false,
      selectedFiles: [],
    };

  }

  onFileChange = (event) => {
    const files = event.target.files;
    if (files.length === 2) {
      this.setState({ selectedFiles: files });
    } else {
      alert('Please select exactly two files.');
      event.target.value = null; // Reset the file input
    }
  };

  onFileUpload = async () => {
    const { selectedFiles } = this.state;

    console.log('starting...');

    // if (selectedFiles.length !== 2) {
    //   alert('Please select exactly two files before uploading.');
    //   return;
    // }

    try {
      const formData = new FormData();

      for (let i = 0; i < selectedFiles.length; i++) {
        formData.append(`myFiles[${i}]`, selectedFiles[i], selectedFiles[i].name);
      }

      console.log('a')
      console.log(selectedFiles.length)
      // defining two image file names to use for parameter
      const locationInput = selectedFiles[0].name;
      const locationInput2 = selectedFiles[1].name;

      console.log('b')
      // route
      const url = `http://127.0.0.1:5000/sun_data_route/${locationInput}/${locationInput2}`;
      console.log(url)

      const response = await fetch(url, {
        method: 'POST',
        body: formData, //DONT FORGET TO CHANGE THIS BACK TO NOT A STRING 
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log('Response from Flask:', responseData);
        // Handle response data as needed
      } else {
        throw new Error('Failed to send data to Flask');
      }
    } catch (error) {
      console.error('Error while sending data to Flask:', error);
      // Handle error
    }


    // fetch(`http://127.0.0.1:3000/sun_data_route/${encodeURIComponent(locationInput)}`)
    //   .then(response => response.json())
    //   .then(data => {
    //     this.setState({ coordinates: data, showMap: true });
    //   })
    //   .catch(error => {
    //     console.error('Error!!!:', error);
    //   });
    // console.log('Fetching data...');
  };

  render() {
    const { coordinates, showMap, clickMap } = this.props;

    return (
      <div>
        <h1>Home</h1>
        <p>Welcome to p-geolocation!</p>
        <label>
        </label>
        <input type="file" accept="image/*" multiple onChange={this.onFileChange}/>
        <button onClick={this.onFileUpload}>Upload Two Images</button>

        {coordinates && (
          <div>
            <p>Latitude: {coordinates.longitude}</p>
            <p>Longitude: {coordinates.latitude}</p>
          </div>
        )}

        <button onClick={clickMap}>Show Map</button>

        {showMap && <MapComponent />}
      </div>
    );
  }
}

// export default HomePage;
