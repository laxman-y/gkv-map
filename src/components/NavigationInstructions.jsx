import React, { useMemo } from 'react';
import { Navigation, ArrowRight, Clock, Ruler } from 'lucide-react';
import { getRoomTypeLabel } from '../data/campusData';

// Helper function to generate direction info
function generateDirections(path, mapData) {
  if (!path || path.length < 2) return [];

  const directions = [];
  for (let i = 0; i < path.length - 1; i++) {
    const current = mapData.find(n => n.id === path[i]);
    const next = mapData.find(n => n.id === path[i + 1]);
    if (!current || !next) continue;

    const dx = next.x - current.x;
    const dy = next.y - current.y;
    let instruction = '';

    if (Math.abs(dx) > Math.abs(dy)) {
      instruction = dx > 0 ? 'Turn Right' : 'Turn Left';
    } else {
      instruction = dy > 0 ? 'Go Down' : 'Go Up';
    }

    directions.push({
      step: i + 1,
      instruction: `${instruction} towards ${next.name}`,
      room: next.name,
      type: next.type || 'point'
    });
  }
  return directions;
}

const NavigationInstructions = ({
  path,
  floor,
  directions = [],
  totalDistance,
  mapData = []
}) => {
  // ✅ Always call hooks at top (before any early return)
  const computedDirections = useMemo(() => {
    if (directions.length > 0) return directions;
    return generateDirections(path, mapData);
  }, [path, directions, mapData]);

  const estimatedTime = Math.ceil((totalDistance || 0) / 60);

  // ✅ You can now safely return null afterwards
  if (!path || path.length === 0) {
    return null;
  }

  return (
    <div className="card">
      <h2 className="nav-header">
        <Navigation />
        Turn-by-Turn Directions
      </h2>

      {/* Summary */}
      <div className="summary-stats">
        <div className="stat-item">
          <div className="stat-value">{path.length}</div>
          <div className="stat-label">Steps</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">
            <Ruler />
            {totalDistance}m
          </div>
          <div className="stat-label">Distance</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">
            <Clock />
            {estimatedTime}
          </div>
          <div className="stat-label">Minutes</div>
        </div>
      </div>

      {/* Steps */}
      <div className="direction-steps">
        {computedDirections.map((direction, idx) => (
          <div key={idx} className="direction-step">
            <div className="step-number">{direction.step}</div>
            <div className="step-content">
              <div className="step-instruction">{direction.instruction}</div>
              <div className="step-room">
                <span className="emoji">{getRoomTypeLabel(direction.type)}</span>
                <span>{direction.room}</span>
              </div>
            </div>
            {idx < computedDirections.length - 1 && (
              <ArrowRight className="step-arrow" />
            )}
          </div>
        ))}
      </div>

      {/* Success */}
      <div className="success-message">
        <p className="success-text">
          🎯 Follow these directions to reach your destination!
        </p>
      </div>
    </div>
  );
};

export default NavigationInstructions;
