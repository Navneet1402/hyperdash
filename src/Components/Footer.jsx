import React from 'react';
import './Footer.css';


function Footer() {
  return (
    <footer className="footer">
      <div className="newsletter">
        <h2 className="newsletterTitle">Subscribe to our newsletter</h2>
        <form className="newsletterForm">
          <label htmlFor="emailInput" className="visuallyHidden">Enter your email</label>
          <input type="email" id="emailInput" placeholder="Enter your email" className="emailInput" required />
          <button type="submit" className="submitButton">
            <img src="https://cdn.builder.io/api/v1/image/assets/272450c229394503ba79a2c462fecf0f/f34080ac3dcc4c96ae2a30ece15fd3f525069c79eeb727f166af776413fa430d?apiKey=272450c229394503ba79a2c462fecf0f&" alt="Submit" />
          </button>

        </form>
      </div>
      
      <nav className="footerNav">
        <div className="navColumn">
          <h3>Models</h3>
          <ul>
            <li><a href="#airx">Air X</a></li>
            <li><a href="#lexoz">Lexo Z</a></li>
            <li><a href="#gravity9">Gravity 9</a></li>
          </ul>
        </div>
        <div className="navColumn">
          <h3>Company</h3>
          <ul>
            <li><a href="#fleet">Fleet</a></li>
            <li><a href="#company">Company</a></li>
            <li><a href="#stories">Stories</a></li>
          </ul>
        </div>
        <div className="navColumn">
          <h3>Services</h3>
          <ul>
            <li><a href="#purchasing">Purchasing</a></li>
            <li><a href="#charging">Charging</a></li>
            <li><a href="#insurance">Insurance</a></li>
            <li><a href="#service">Service</a></li>
          </ul>
        </div>
        <div className="navColumn">
          <h3>More</h3>
          <ul>
            <li><a href="#spaces">Spaces</a></li>
            <li><a href="#investors">Investors</a></li>
            <li><a href="#career">Career</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
