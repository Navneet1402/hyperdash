import React from 'react';
import './NumericalSpecs.css';

function NumericalSpecs() {
  const specs = [
    { label: 'Max Power', value: '1200+', unit: 'hp' },
    { label: 'EPA estimated range up to', value: '516', unit: 'mi' },
    { label: 'minutes to charge 200 miles', value: '12', unit: 'mins' },
    { label: '0-60 mph', value: '<2', unit: 'sec' }
  ];

  return (
    <section className="numericalSpecs">
      {specs.map((spec, index) => (
        <div key={index} className="specItem">
          <p className="specLabel">{spec.label}</p>
          <p className="specValue">{spec.value}</p>
          <p className="specUnit">{spec.unit}</p>
        </div>
      ))}
    </section>
  );
}

export default NumericalSpecs;
