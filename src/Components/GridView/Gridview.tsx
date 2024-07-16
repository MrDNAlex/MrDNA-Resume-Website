import React from 'react';
import './Grid.css'; // Make sure your CSS file is linked correctly

const GridView = () => {
  return (
    <div className="grid-container">
      {Array.from({ length: 12 }, (_, index) => (
        <div key={index} className="grid-item">Item {index + 1}</div>
      ))}
    </div>
  );
};

export default GridView;