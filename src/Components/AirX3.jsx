import React from 'react';
import './AirX3.css';

const AirX3 = () => {
  return (
    <div className="image-container">
      <img src="img2.png" alt="Air X" className='img' />
      <div className="text-overlay">
        <h1>Air X</h1>
        <p>Accelerate into new Era</p>
        <button>Order Now</button>
        <button className='second-button'>Learn More</button>
      </div>
    </div>
  );
};

export default AirX3;
