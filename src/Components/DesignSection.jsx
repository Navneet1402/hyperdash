import React from 'react';
import './DesignSection.css';

function DesignSection() {
  return (
    <section className="designSection">
      {/* Feature Grid Section */}
      <div className="featureGrid">
        {[
          { title: 'Impeccable Design', image: 'https://cdn.builder.io/api/v1/image/assets/272450c229394503ba79a2c462fecf0f/fe89813d6bff8d63d3f25effd29ea2f8b3a320cf5226f968a364312819c24d03?apiKey=272450c229394503ba79a2c462fecf0f&' },
          { title: 'Elevated Performance', image: 'https://cdn.builder.io/api/v1/image/assets/272450c229394503ba79a2c462fecf0f/2c3149ed937da46279e91075dd674278b651a54c188216981402d7fbed57fc95?apiKey=272450c229394503ba79a2c462fecf0f&' },
          { title: 'Great Interiors', image: 'https://cdn.builder.io/api/v1/image/assets/272450c229394503ba79a2c462fecf0f/aaef5169b0451636d30c012423c1755eeb14351614b50dd404a60cf973ab4729?apiKey=272450c229394503ba79a2c462fecf0f&' }
        ].map((feature, index) => (
          <div key={index} className="featureItem">
            <img src={feature.image} alt={feature.title} className="featureImage" />
            <h3 className="featureTitle">{feature.title}</h3>
          </div>
        ))}
      </div>

      {/* Sustainability Feature Section */}
      <div className="sustainabilityFeature">
        <img src="https://cdn.builder.io/api/v1/image/assets/272450c229394503ba79a2c462fecf0f/10958efd2c91017d3a6a1190536af0fa9183cca6f269a3b5ee4f59ea27b596bf?apiKey=272450c229394503ba79a2c462fecf0f&" alt="Sustainable Design" className="sustainabilityImage" />
        <div className="sustainabilityContent">
          <img src="https://cdn.builder.io/api/v1/image/assets/272450c229394503ba79a2c462fecf0f/f4c8e1df7d235c95035c80915a3eda3ccda28e2dd0200c571783068fa51b5259?apiKey=272450c229394503ba79a2c462fecf0f&" alt="Sustainability Icon" className="sustainabilityIcon" />
          <h3 className="sustainabilityTitle">Drive to a Sustainable Future</h3>
          <p className="sustainabilityDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>

      {/* Gallery and Showcase Section */}
      <div className="imageGalleryWrapper">
        {/* Left side: Image Gallery */}
        <div className="imageGallery">
          <img src="https://cdn.builder.io/api/v1/image/assets/272450c229394503ba79a2c462fecf0f/111e8e0bbd334310591251d069f4879189f3bc1333914048ab228ac385e6815a?apiKey=272450c229394503ba79a2c462fecf0f&" alt="Design Detail 1" className="galleryImage" />
          <img src="https://cdn.builder.io/api/v1/image/assets/272450c229394503ba79a2c462fecf0f/1d3e5616ac011724b336c7d61f6cf08e256f5b2b18f1ae2b6993f8acbf9e5252?apiKey=272450c229394503ba79a2c462fecf0f&" alt="Design Detail 2" className="galleryImage" />
          <img src="https://cdn.builder.io/api/v1/image/assets/272450c229394503ba79a2c462fecf0f/75d2cf7c67ee63ebdc621feaf3f1ff578fe6520354ea8555fef34f95ec7fbf00?apiKey=272450c229394503ba79a2c462fecf0f&" alt="Design Detail 3" className="galleryImage" />
          <img src="https://cdn.builder.io/api/v1/image/assets/272450c229394503ba79a2c462fecf0f/618be07729e7eef950ae929aa57760e66a109488f9df558ef28ca5170a1f22b4?apiKey=272450c229394503ba79a2c462fecf0f&" alt="Design Detail 4" className="galleryImage" />
        </div>

        {/* Right side: Showcase Image */}
        <img src="https://cdn.builder.io/api/v1/image/assets/272450c229394503ba79a2c462fecf0f/c166e012bc9ee899da0cea5f42818dda0b8c4436132541b2836d9d631638ebd5?apiKey=272450c229394503ba79a2c462fecf0f&" alt="Showcase Vehicle" className="showcaseImage" />
      </div>
    </section>
  );
}

export default DesignSection;
