import {MapComponent} from './mapcomponent';
import React, { Component } from 'react';

class App extends Component {
  // add a button to call function fetch. 
  // <button onclick=function>

  click = () => {
    // need to figure out how to upload an image to flask TODO (2 IMAGES)
    // make suer in flask to methods=['POST']
    console.log('HGa;slkdjfa;osdifjkl')

    // right now, the button calls this click function which just 
    // prints to the console which u can find from inspect element -> console
  }
  
// TODO
  // below is some chatgpt code to start from:

  // const [selectedFile, setSelectedFile] = useState(null);

  // handleFileChange = (event) => {
  //   setSelectedFile(event.target.files[0]);
  // };

  // handleUpload = () => {
  //   const formData = new FormData();
  //   formData.append('file', selectedFile);

  //   fetch('http://your-flask-server/upload', {
  //     method: 'POST',
  //     body: formData
  //   })
  //   .then(response => {
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  //     return response.json();
  //   })
  //   .then(data => {
  //     console.log(data);
  //     // Handle success or update UI as needed
  //   })
  //   .catch(error => {
  //     console.error('Error uploading the image:', error);
  //   });
  // };
  
  render() {

    // This will go in a function that is called when the button below is pressed!
    // fetch('/sun_data_route')
    // .then(response => response.json())
    // .then(data => {
    //   console.log(data);
    //   // Handle the data in your React app
    // })
    // .catch(error => {
    //   console.error('Error:', error);
    // });
    // const 
    return (
      <div>
        <h1>Hi! Welcome to p-geolocation. </h1> <br />
<<<<<<< HEAD
<<<<<<< HEAD
        <button onClick={() => this.click()}>Click this!</button>

=======
>>>>>>> 4743cf1 (Co-authored-by: George Axarlis <georgeaxa@users.noreply.github.com>)
=======
        <button onClick={() => this.click()}>Click this!</button>

>>>>>>> aa88e31 (added some stuff)
        <MapComponent />
      </div>
    );
  }
}
  

export default App;
