import React from 'react';
import Overlay from '../components/Overlay';

const ContactPage = () => {
  const contentStyle = {
    position: 'relative',
    zIndex: 2,
    color: 'white',
    paddingTop: '20px', 
  };  
  
  return (
    <div style={{ paddingLeft: '20px' }}>
      <Overlay />
      <div style={contentStyle}>
        <h2>Contact us</h2>
        <p>
          <div>
            <h1><a href="https://www.p-ai.org/"> P-AI </a></h1>
            <h2> Team members: </h2>
            <ul>
              <li> Bennet Matazzoni </li>
              <li> Ethan </li>
              <li> Aimee </li>
              <li> George </li>
              <li> Caleb </li>
              <li> Gada </li>
            </ul>
          </div>
        </p>
      </div>
    </div>
  );
};

export { ContactPage };
