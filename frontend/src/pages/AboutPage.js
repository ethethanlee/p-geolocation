import React from 'react';
import Overlay from '../components/Overlay';

const AboutPage = () => {
  const contentStyle = {
    position: 'relative',
    zIndex: 2,
    color: 'white',
    paddingTop: '20px', 
  };

  const file1Url = '/images/image1.jpeg';
  const file2Url = '/images/image2.jpeg';

  return (
    <div style={{ paddingLeft: '50px', paddingRight: '50px' }}>
      < Overlay />
      <div style={contentStyle}>
        <h1>About p-geolocation</h1>
        <p>
        This web app project revolves around the fascinating concept of determining one's geographical location based on two images of the sun. This innovative tool serves as a testament to the intersection of technology, image processing, and geolocation services. Users upload two images featuring the sun, and the application, through its sophisticated backend infrastructure, leverages image processing techniques to determine the user's approximate location.
        </p>
        <p>
        Upon receiving the images, the web app harnesses the power of Python's cv2 library for image analysis. The primary objective is to precisely calculate the sun's position relative to the user. The application initiates image parsing, focusing on identifying the sun's location based on its brightness. Through advanced algorithms and computer vision techniques, it determines the sun's coordinates in the sky.
        </p>
        <p>
        The processed data then undergoes geolocation processing. The app translates the sun's position data into a geographical location. Users receive their location output, presented either as a general area or a specific set of coordinates that can be visualized on Google Maps.
        </p>
        <p>
        From a user perspective, the web app offers a straightforward and intuitive interface. Upon uploading the images, users witness a seamless processing mechanism in the backend. The application delivers the output promptly, providing them with a tangible representation of their location based on the sun's position captured in the images.
        </p>
        <p>
        The project's significance lies not just in its functional utility but also in its educational and exploratory aspects. It serves as a practical demonstration of the capabilities of image processing techniques, particularly in extracting meaningful information from visual data. Moreover, it sparks interest in astronomy and technology, drawing attention to the potential synergies between these fields.
        </p>
        <p>
          For more information, contact us on our website at P-ai!
        </p>
        <p>
          If you would like to sample our tool, here are two images taken by the Estella Science Building at Pomona College:

          <div>
            <p>Download File 1:</p>
            <a href={file1Url} download="pgeolocation-image1.jpeg">
              Download File 1
            </a>
          </div>
          <div>
            <p>Download File 2:</p>
            <a href={file2Url} download="pgeolocation-image2.jpeg">
              Download File 2
            </a>
          </div>
        </p>
      </div>
    </div>
  );
};

export { AboutPage };

