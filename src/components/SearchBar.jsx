import React from 'react';
import { Search } from 'lucide-react';
import { getRoomTypeLabel } from '../data/campusData';

const SearchBar = ({ 
  searchQuery, 
  setSearchQuery, 
  searchResults, 
  onSelectDestination 
}) => {
  return (
    <div className="form-group search-dropdown">
      <label className="form-label">
        <Search />
        Where do you want to go?
      </label>
      <div style={{ position: 'relative' }}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for classroom, lab, or room..."
          className="form-input"
        />
        {searchQuery && searchResults.length > 0 && (
          <div className="search-results">
            {searchResults.map(result => (
              <button
                key={result.id}
                onClick={() => onSelectDestination(result)}
                className="search-result-item"
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '20px' }}>{getRoomTypeLabel(result.type)}</span>
                  <div style={{ flex: 1 }}>
                    <div className="result-name">{result.name}</div>
                    <div className="result-meta">
                      {result.buildingName} • Floor {result.floorNumber}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
        {searchQuery && searchResults.length === 0 && (
          <div className="search-results">
            <div className="search-no-results">
              No rooms found matching "{searchQuery}"
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;