import React from 'react';

const Overlay = () => {
  const overlayStyle = {
    position: 'fixed',
    top: '64px', 
    left: 0,
    width: '100%',
    height: 'calc(100% - 64px)', 
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1,
  };

  return <div style={overlayStyle}></div>;
};

export default Overlay;

