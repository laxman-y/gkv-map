import React from 'react';

const Legend = () => {
  return (
    <div className="legend">
      <h3>Legend</h3>
      <div className="legend-item">
        <div className="legend-color green"></div>
        <span className="legend-text">Current Location</span>
      </div>
      <div className="legend-item">
        <div className="legend-color red"></div>
        <span className="legend-text">Destination</span>
      </div>
      <div className="legend-item">
        <div className="legend-color blue"></div>
        <span className="legend-text">Path Route</span>
      </div>
      <div className="legend-item">
        <div className="legend-color gray"></div>
        <span className="legend-text">Other Rooms</span>
      </div>
    </div>
  );
};

export default Legend;