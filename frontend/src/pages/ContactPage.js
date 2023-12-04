import React from 'react';
import Overlay from '../components/Overlay';
import '@fortawesome/fontawesome-free/css/all.css';
import paiImage from '../components/pai.png';
const ContactPage = () => {
  const contentStyle = {
    position: 'relative',
    zIndex: 2,
    color: 'white',
    paddingTop: '20px',
    textAlign: 'center',
  };
  return (
    <div style={{ paddingLeft: '20px' }}>
      <Overlay />
      <div style={contentStyle}>
        <h1>Contact us</h1>
        <p>
          <div>
            <h1>
              <a href="https://www.p-ai.org/">
                <img src={paiImage} alt="P-AI" style={{ width: '30px', height: '30px' }} />
              </a>
              <a href="https://www.instagram.com/pai.claremont/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram" style={{ marginLeft: '30px' }}></i>
              </a>
            </h1>
            <h2> Project lead </h2>
            <p> Ethan Lee PO '24</p>
            <h2> Team members</h2>
            <p>Aimee Co PO '26 </p>
            <p>Bennet Matazzoni HM '26</p>
            <p>Caleb Kim PO '26</p>
            <p>Gada Tefera PO '26</p>
            <p>George Axarlis PO '24</p>
          </div>
        </p>
      </div>
    </div>
  );
};
export { ContactPage };