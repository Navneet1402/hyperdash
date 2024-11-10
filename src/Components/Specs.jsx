import React from 'react';
import './Specs.css'; // Import regular CSS file

function SpecificationSection() {
  const specifications = [
    { label: 'Range (EPA est.)', value: 'Up to 300 miles' },
    { label: 'Peak Power', value: '400 hp' },
    { label: 'Towing', value: '2000 pounds' },
    { label: 'Drag Coefficient', value: '0.28 cd' },
    { label: 'Acceleration', value: '4.5s 0-60 mph' },
    { label: 'Wheels', value: '19" or 20"' },
    { label: 'Seating', value: 'Up to 5' },
    { label: 'Top Speed', value: '130 mph' }
  ];

  return (
    <section className="specificationsSection">
      <div className="specContent">
        <h2 className="specTitle">Model Air X Specifications</h2>
        <div className="specGrid">
          {specifications.map((spec, index) => (
            <div key={index} className="specItem">
              <h3 className="specLabel">{spec.label}</h3>
              <p className="specValue">{spec.value}</p>
            </div>
          ))}
        </div>
      </div>
    
    </section>
  );
}

export default SpecificationSection;
