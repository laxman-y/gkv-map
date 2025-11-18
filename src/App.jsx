import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Navigation, Search, MapPin } from 'lucide-react';
import TeamHeader from './components/TeamHeader';
import Header from './components/Header';
import LocationSelector from './components/LocationSelector';
import BuildingSelector from './components/BuildingSelector';
import FloorMap from './components/FloorMap';
import NavigationInstructions from './components/NavigationInstructions';
import { campusData, getAllRooms } from './data/campusData';
import {
  findPath,
  buildGraph,
  calculatePathDistance
} from './utils/pathfinding';
import './style.css';

function App() {
  // 🧠 State Management
  const [selectedBuilding, setSelectedBuilding] = useState('engineering');
  const [selectedFloor, setSelectedFloor] = useState(1);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [destination, setDestination] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [suppressSearch, setSuppressSearch] = useState(false);
  const [showNavigation, setShowNavigation] = useState(false);
  const wrapperRef = useRef(null);

  // 🏢 Get building and floor
  const building = campusData.buildings.find(b => b.id === selectedBuilding);
  const floor = building?.floors.find(f => f.number === selectedFloor);

  // 🧭 Build graph
  const graph = useMemo(() => buildGraph(floor), [floor]);

  // 🧩 Find path
  const path = useMemo(() => {
    if (!currentLocation || !destination || !floor) return null;
    return findPath(graph, currentLocation, destination);
  }, [currentLocation, destination, graph, floor]);

  // 📏 Total distance
  const totalDistance = useMemo(() => {
    if (!path || !floor) return 0;
    return calculatePathDistance(path, floor);
  }, [path, floor]);

  // 🚶 Directions
  const directions = useMemo(() => {
    if (!path || !floor) return [];
    const dirs = [];
    for (let i = 0; i < path.length - 1; i++) {
      const currentNode = floor.rooms.find(r => r.id === path[i]);
      const nextNode = floor.rooms.find(r => r.id === path[i + 1]);
      if (!currentNode || !nextNode) continue;
      const dx = nextNode.x - currentNode.x;
      const dy = nextNode.y - currentNode.y;
      const dir = Math.abs(dx) > Math.abs(dy)
        ? dx > 0 ? 'Turn Right' : 'Turn Left'
        : dy > 0 ? 'Go Down' : 'Go Up';
      dirs.push({
        step: i + 1,
        instruction: `${dir} towards ${nextNode.name}`,
        room: nextNode.name,
        type: nextNode.type || 'point'
      });
    }
    return dirs;
  }, [path, floor]);

  // 🔍 Handle search
  useEffect(() => {
    if (suppressSearch) {
      setSearchResults([]);
      setSuppressSearch(false);
      return;
    }
    if (!searchQuery.trim()) {
      setSearchResults([]);
      setShowDropdown(false);
      return;
    }
    const query = searchQuery.toLowerCase();
    let results = getAllRooms().filter(room =>
      room.name.toLowerCase().includes(query) ||
      room.type.toLowerCase().includes(query)
    );
    results = results.filter(r => r.id !== destination && r.id !== currentLocation);
    setSearchResults(results);
    setShowDropdown(results.length > 0);
  }, [searchQuery, suppressSearch, destination, currentLocation]);

  // 🖱️ Click outside hides dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // 🎯 Select destination
  const handleSelectDestination = (result) => {
    setDestination(result.id);
    setSelectedBuilding(result.buildingId);
    setSelectedFloor(result.floorNumber);
    setSearchQuery(result.name);
    setSuppressSearch(true);
    setShowDropdown(false);
  };

  // 🖱️ Map click
  const handleRoomClick = (room) => {
    if (!currentLocation) setCurrentLocation(room.id);
    else if (!destination) {
      setDestination(room.id);
      setSearchQuery(room.name);
    }
  };

  // ▶️ Start navigation
  const handleStartNavigation = () => {
    if (currentLocation && destination && path) {
      setShowNavigation(true);
      setShowDropdown(false);
      setTimeout(() => {
        document.getElementById('navigation-instructions')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  // 🔄 Reset
  const handleReset = () => {
    setCurrentLocation(null);
    setDestination(null);
    setSearchQuery('');
    setSearchResults([]);
    setShowDropdown(false);
    setShowNavigation(false);
  };

  return (
    <div className="container">
      <TeamHeader />
      <Header />

      {/* 🔍 Search Section */}
      <div className="card">
        <div className="grid">
          <LocationSelector
            currentLocation={currentLocation}
            setCurrentLocation={setCurrentLocation}
            floor={floor}
          />

          {/* ✅ Integrated Search Input + Dropdown */}
          <div className="search-wrapper" ref={wrapperRef} style={{ position: 'relative', flex: 1 }}>
            <label className="label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Search size={16} /> Where do you want to go?
            </label>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => {
                if (searchResults.length > 0) setShowDropdown(true);
              }}
              placeholder="Search rooms, labs, offices..."
              className="input"
              style={{
                width: '100%',
                padding: '10px 12px',
                borderRadius: '8px',
                border: '1px solid #D1D5DB',
                fontSize: '14px',
                outline: 'none'
              }}
            />

            {showDropdown && searchResults.length > 0 && (
              <div
                className="dropdown"
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  right: 0,
                  background: '#fff',
                  border: '1px solid #E5E7EB',
                  borderRadius: '8px',
                  marginTop: '4px',
                  maxHeight: '220px',
                  overflowY: 'auto',
                  zIndex: 999,
                  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                }}
              >
                {searchResults.map((result, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleSelectDestination(result)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '10px 14px',
                      cursor: 'pointer',
                      borderBottom: '1px solid #F3F4F6'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#F3F4F6')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#fff')}
                  >
                    <MapPin size={16} color="#ec4899" />
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '14px', color: '#111827' }}>
                        {result.name}
                      </div>
                      <div style={{ fontSize: '12px', color: '#6B7280' }}>
                        {result.buildingName} • Floor {result.floorNumber}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ▶️ Buttons */}
        <div className="button-group">
          {currentLocation && destination && (
            <button onClick={handleStartNavigation} className="btn btn-primary">
              <Navigation /> Start Navigation
            </button>
          )}
          <br /><br />
          {(currentLocation || destination) && (
            <button onClick={handleReset} className="btn btn-secondary">
              Reset
            </button>
          )}
        </div>

        {/* Info Alerts */}
        {!currentLocation && !destination && (
          <div className="alert alert-info">
            <p>👆 Select your current location and destination to begin navigation</p>
          </div>
        )}
        {currentLocation && !destination && (
          <div className="alert alert-warning">
            <p>✨ Great! Now search or click a room on the map to set your destination</p>
          </div>
        )}
        {currentLocation && destination && !showNavigation && (
          <div className="alert alert-success">
            <p>🎯 Ready to navigate! Click "Start Navigation" to see directions</p>
          </div>
        )}
      </div>

      {/* Building Selector */}
      <BuildingSelector
        buildings={campusData.buildings}
        selectedBuilding={selectedBuilding}
        setSelectedBuilding={setSelectedBuilding}
        selectedFloor={selectedFloor}
        setSelectedFloor={setSelectedFloor}
        currentBuilding={building}
      />

      {/* Map Section */}
      <div className="card">
        <div className="map-header">
          <h2 className="map-title">{building?.name} - Floor {selectedFloor}</h2>
          <div className="map-hint">Click on rooms to select location/destination</div>
        </div>
        <FloorMap
          floor={floor}
          path={path}
          currentLocation={currentLocation}
          destination={destination}
          onRoomClick={handleRoomClick}
        />
      </div>

      {/* Navigation Instructions */}
      {showNavigation && path && (
        <div id="navigation-instructions">
          <NavigationInstructions
            path={path}
            floor={floor}
            directions={directions}
            // totalDistance={totalDistance}
          />
        </div>
      )}

      {/* Footer */}
      <div className="footer">
        <p>Campus Navigator - Helping students find their way 🎓</p>
        <p>&copy; 2025 Campus Navigator</p>
      </div>
    </div>
  );
}

export default App;
