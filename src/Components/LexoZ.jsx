import React from 'react';
import './LexoZ.css'; // Import external CSS for styles

const LexoZ = () => {
  return (
    <div className="lexoZ-container">
      <div className="lexoZ-text">
        <h2 className="lexoZ-title">Lexo Z</h2>
        <h3 className="lexoZ-subtitle">Accelerate into a New Era</h3>
        <p className="lexoZ-description">
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</span><br />
          <br />
          ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          <br /><br />
          duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
        </p>

        <button className="lexoZ-cta">Order Now</button>
        <button className="lexoZ-cta2">Learn More</button>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/272450c229394503ba79a2c462fecf0f/e60926465765948fe8f5163e945885ba27c3fcf3a86127a846bc3690cb393091?apiKey=272450c229394503ba79a2c462fecf0f&"
        alt="Lexo Z Electric Vehicle"
        className="lexoZ-image"
      />
    </div>
  );
};

export default LexoZ;
