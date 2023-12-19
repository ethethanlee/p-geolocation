import React, { Component } from 'react';
import { MapComponent } from '../mapcomponent'; // Adjust the path as needed
import Button from '@mui/material/Button';


const Overlay = () => {
  const overlayStyle = {
    position: 'fixed',
    top: '64px',
    left: 0,
    width: '100%',
    height: 'calc(100% - 64px)',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    zIndex: 0,
  };
  return <div style={overlayStyle}></div>;
};

export class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showMap: false,
      selectedFiles: [],
      latitude: 0,
      longitude: 0,
    };

  }

  onFileChange = async (event) => {
    const files = event.target.files;
    if (files.length === 2) {
      this.setState({ selectedFiles: files });
    } else {
      alert('Please select exactly two files.');
      event.target.value = null; // Reset the file input
    } 

    // const { selectedFiles } = this.state;

    console.log('starting...');

    // if (selectedFiles.length !== 2) {
    //   alert('Please select exactly two files before uploading.');
    //   return;
    // }

    try {
      const formData = new FormData();

      for (let i = 0; i < files.length; i++) {
        formData.append(`myFiles[${i}]`, files[i], files[i].name);
      }

      console.log('a')
      console.log(files.length)
      // defining two image file names to use for parameter
      const locationInput = files[0].name;
      const locationInput2 = files[1].name;

      const url = `http://127.0.0.1:5000/sun_data_route/${locationInput}/${locationInput2}`;
      console.log(url)

      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      console.log(timezone);
      formData.append('timezone', timezone);

      const response = await fetch(url, {
        method: 'POST',
        body: formData, //DONT FORGET TO CHANGE THIS BACK TO NOT A STRING 
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log('Response from Flask:', responseData);
        // Handle response data as needed
        this.setState({
          latitude: responseData.latitude,
          longitude: responseData.longitude,
          showMap: true,
        })

      } else {
        throw new Error('Failed to send data to Flask');
      }
    } catch (error) {
      alert('Error while sending data to Flask:', error);
      // Handle error
    }

  };

  render() {

    const fileInputStyle = {
      display: 'none',
    }

    const centerContainerStyle = {
      // display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh', // Ensures full viewport height
    };

    // const boxStyle = {
    //   backgroundColor: '#76ABDF',
    //   borderRadius: '20px',
    //   padding: '20px',
    //   border: '2px solid white',
    // };

    return (
      <div style={centerContainerStyle} > <Overlay />
        <div style={{ position: 'relative', textAlign: 'center' }}>
        <div style={{ paddingLeft: '20px', fontFamily: 'Poppins, sans-serif', color: 'white'}}>
          <br />
          <h1 s>Welcome to p-geolocation!</h1>
          <p>Upload two images of the sun!</p>
          <Button
            component="label"
            htmlFor="fileInput"
            sx={{
              backgroundColor: '#FFFFFF',
              color: 'black',
              padding: '10px 20px',
              borderRadius: '50px',
              textTransform: 'uppercase',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#DADEDF',
              },
            }}
          >
            Upload Two Images
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              multiple
              style={fileInputStyle}
              onChange={this.onFileChange}
            />
          </Button>

          {/* {coordinates && (
            <div>
              <p>Latitude: {coordinates.longitude}</p>
              <p>Longitude: {coordinates.latitude}</p>
            </div>
          )} */}

          {/* <button onClick={clickMap}>Show Map</button> */}

          {this.state.showMap && <MapComponent coordinates={[this.state.latitude, this.state.longitude]} />}
        </div></div>
        </div>
    );
  }
}

// export default HomePage;
