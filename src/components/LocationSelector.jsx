import React from 'react';
import { MapPin } from 'lucide-react';
import { getRoomTypeLabel } from '../data/campusData';

const LocationSelector = ({ currentLocation, setCurrentLocation, floor }) => {
  return (
    <div className="form-group">
      <label className="form-label">
        <MapPin />
        Your Current Location
      </label>
      <select
        value={currentLocation || ''}
        onChange={(e) => setCurrentLocation(e.target.value)}
        className="form-select"
      >
        <option value="">Select your current location...</option>
        {floor?.rooms.map(room => (
          <option key={room.id} value={room.id}>
            {getRoomTypeLabel(room.type)} {room.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LocationSelector;