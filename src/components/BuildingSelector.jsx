import React from 'react';

const BuildingSelector = ({ 
  buildings, 
  selectedBuilding, 
  setSelectedBuilding,
  selectedFloor,
  setSelectedFloor,
  currentBuilding
}) => {
  return (
    <div className="card">
      <h2 className="selector-header">Select Building & Floor</h2>
      <div className="grid">
        <div className="form-group">
          <label className="form-label">Building</label>
          <select
            value={selectedBuilding}
            onChange={(e) => {
              setSelectedBuilding(e.target.value);
              setSelectedFloor(1);
            }}
            className="form-select"
          >
            {buildings.map(b => (
              <option key={b.id} value={b.id}>
                {b.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label className="form-label">Floor</label>
          <select
            value={selectedFloor}
            onChange={(e) => setSelectedFloor(Number(e.target.value))}
            className="form-select"
          >
            {currentBuilding?.floors.map(f => (
              <option key={f.number} value={f.number}>
                Floor {f.number}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default BuildingSelector;