import React from "react";
import image from '../components/sky.png';

const Background = () => {
    const backgroundStyle = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vh',
        position: 'absolute',
        zIndex: '-1', 
    };

    return (
        <div className="background" style={backgroundStyle}>
        </div>
    );
};

export { Background };
