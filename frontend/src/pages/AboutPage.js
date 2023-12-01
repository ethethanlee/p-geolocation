import React from 'react';
import Overlay from '../components/Overlay';

const AboutPage = () => {
  const contentStyle = {
    position: 'relative',
    zIndex: 2,
    color: 'white',
    paddingTop: '20px', 
  };

  return (
    <div style={{ paddingLeft: '20px' }}>
      < Overlay />
      <div style={contentStyle}>
        <h2>About p-geolocation</h2>
        <p>
          p-geolocation parses two images which feature the sun and then displays their location on Google Maps.
        </p>
        <p>
          This project utilizes React JavaScript to create an interactive and dynamic user interface.
        </p>
        <p>
          Feel free to explore and enjoy using p-geolocation!
        </p>
      </div>
    </div>
  );
};

export { AboutPage };

