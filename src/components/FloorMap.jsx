import React, { useMemo } from 'react';
import Legend from './Legend';

const FloorMap = ({
  floor,
  path,
  currentLocation,
  destination,
  onRoomClick
}) => {
  const getRoomColor = (roomId) => {
    if (roomId === currentLocation) return '#10b981';
    if (roomId === destination) return '#ef4444';
    if (path && path.includes(roomId)) return '#3b82f6';
    return '#6b7280';
  };

  // ✅ Auto-fit bounding box (for visibility)
  const { minX, minY, maxX, maxY } = useMemo(() => {
    if (!floor || !floor.rooms?.length) {
      return { minX: 0, minY: 0, maxX: 800, maxY: 900 };
    }
    const xs = floor.rooms.map(r => r.x);
    const ys = floor.rooms.map(r => r.y);
    return {
      minX: Math.min(...xs) - 400,
      minY: Math.min(...ys) - 400,
      maxX: Math.max(...xs) + 400,
      maxY: Math.max(...ys) + 400,
    };
  }, [floor]);

  if (!floor) {
    return (
      <div className="map-container" style={{ textAlign: 'center', color: '#6b7280' }}>
        No floor data available
      </div>
    );
  }

  const viewBox = `${minX} ${minY} ${maxX - minX} ${maxY - minY}`;

  return (
    <div className="map-container">
      <div className="map-svg-wrapper">
        <svg
          className="map-svg"
          viewBox={viewBox}
          preserveAspectRatio="xMidYMid meet"
        >
          {/* ✅ Show custom roads only for floor.number === 1 */}
          {floor.number === 1 && (
            <g className="custom-roads">
              <path
                d="M-600,10 Q-700,10 -700,-200"
                stroke="#9CA3AF"
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
                opacity="0.4"
              />
              <line x1="-420" y1="90" x2="820" y2="90" stroke="#9CA3AF" strokeWidth="10" opacity="0.5" strokeLinecap="round" />
              <line x1="-600" y1="10" x2="1000" y2="10" stroke="#9CA3AF" strokeWidth="10" opacity="0.5" strokeLinecap="round" />
              <line x1="-600" y1="690" x2="1000" y2="690" stroke="#9CA3AF" strokeWidth="10" opacity="0.5" strokeLinecap="round" />
              <line x1="-420" y1="10" x2="-420" y2="690" stroke="#9CA3AF" strokeWidth="10" opacity="0.5" strokeLinecap="round" />
              <line x1="-600" y1="10" x2="-600" y2="690" stroke="#9CA3AF" strokeWidth="10" opacity="0.5" strokeLinecap="round" />
              <line x1="-420" y1="590" x2="820" y2="590" stroke="#9CA3AF" strokeWidth="10" opacity="0.5" strokeLinecap="round" />
              <line x1="820" y1="690" x2="820" y2="10" stroke="#9CA3AF" strokeWidth="10" opacity="0.5" strokeLinecap="round" />
              <line x1="680" y1="-350" x2="400" y2="-350" stroke="#9CA3AF" strokeWidth="10" opacity="0.5" strokeLinecap="round" />
              <line x1="540" y1="-500" x2="540" y2="-250" stroke="#9CA3AF" strokeWidth="10" opacity="0.5" strokeLinecap="round" />
              <line x1="100" y1="10" x2="100" y2="590" stroke="#9CA3AF" strokeWidth="10" opacity="0.5" strokeLinecap="round" />

              {/* Text — positioned & rotated parallel to lines */}
              <text
                x={(100 + 100) / 2}
                y={(90 + 590) / 2}
                fill="#111827"
                fontSize="14"
                textAnchor="middle"
                alignmentBaseline="middle"
                transform={`
                  rotate(
                    ${Math.atan2(590 - 90, 100 - 100) * (180 / Math.PI)}, 
                    ${(100 + 100) / 2}, 
                    ${(90 + 590) / 2}
                  )
                `}
              >
                --- PATH ----
              </text>
              <text
                x={(820 + 820) / 2}
                y={(90 + 590) / 2}
                fill="#111827"
                fontSize="14"
                textAnchor="middle"
                alignmentBaseline="middle"
                transform={`
                  rotate(
                    ${Math.atan2(590 - 90, 820 - 820) * (180 / Math.PI)}, 
                    ${(820 + 820) / 2}, 
                    ${(90 + 590) / 2}
                  )
                `}
              >
                --- PATH ----
              </text>
              <text
                x={(-420 + 820) / 2}
                y={(90 + 90) / 2}
                fill="#111827"
                fontSize="14"
                textAnchor="middle"
                alignmentBaseline="middle"
                transform={`
                  rotate(
                    ${Math.atan2(90 - 90, 820 + 420) * (180 / Math.PI)}, 
                    ${(820 + 820) / 2}, 
                    ${(90 + 590) / 2}
                  )
                `}
              >
                --- PATH ----
              </text>
              <text
                x={(-420 - 420) / 2}
                y={(590 + 90) / 2}
                fill="#111827"
                fontSize="14"
                textAnchor="middle"
                alignmentBaseline="middle"
                transform={`
                  rotate(
                    ${Math.atan2(590 - 90, -420 + 420) * (180 / Math.PI)}, 
                    ${(-420 - 420) / 2}, 
                    ${(90 + 590) / 2}
                  )
                `}
              >
                --- PATH ----
              </text>
              <text
                x={(-420 + 820) / 2}
                y={(590 + 590) / 2}
                fill="#111827"
                fontSize="14"
                textAnchor="middle"
                alignmentBaseline="middle"
                transform={`
                  rotate(
                    ${Math.atan2(590 - 590, -420 + 820) * (180 / Math.PI)}, 
                    ${(-420 + 820) / 2}, 
                    ${(590 + 590) / 2}
                  )
                `}
              >
                --- PATH ----
              </text>
            </g>
          )}
          {floor.number === 2 && (
            <g className="custom-roads">
              {/* <path
                d="M-600,10 Q-700,10 -700,-200"
                stroke="#9CA3AF"
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
                opacity="0.4"
              /> */}
              <line x1="-420" y1="90" x2="820" y2="90" stroke="#9CA3AF" strokeWidth="10" opacity="0.5" strokeLinecap="round" />
              {/* <line x1="-600" y1="10" x2="1000" y2="10" stroke="#9CA3AF" strokeWidth="10" opacity="0.5" strokeLinecap="round" /> */}
              {/* <line x1="-600" y1="690" x2="1000" y2="690" stroke="#9CA3AF" strokeWidth="10" opacity="0.5" strokeLinecap="round" /> */}
              <line x1="-420" y1="90" x2="-420" y2="590" stroke="#9CA3AF" strokeWidth="10" opacity="0.5" strokeLinecap="round" />
              {/* <line x1="-600" y1="10" x2="-600" y2="690" stroke="#9CA3AF" strokeWidth="10" opacity="0.5" strokeLinecap="round" /> */}
              <line x1="-420" y1="590" x2="820" y2="590" stroke="#9CA3AF" strokeWidth="10" opacity="0.5" strokeLinecap="round" />
              <line x1="820" y1="590" x2="820" y2="90" stroke="#9CA3AF" strokeWidth="10" opacity="0.5" strokeLinecap="round" />
              <line x1="680" y1="-350" x2="400" y2="-350" stroke="#9CA3AF" strokeWidth="10" opacity="0.5" strokeLinecap="round" />
              <line x1="540" y1="-500" x2="540" y2="-250" stroke="#9CA3AF" strokeWidth="10" opacity="0.5" strokeLinecap="round" />
              <line x1="100" y1="90" x2="100" y2="590" stroke="#9CA3AF" strokeWidth="10" opacity="0.5" strokeLinecap="round" />

              {/* Text — positioned & rotated parallel to lines */}
              <text
                x={(100 + 100) / 2}
                y={(90 + 590) / 2}
                fill="#111827"
                fontSize="14"
                textAnchor="middle"
                alignmentBaseline="middle"
                transform={`
                  rotate(
                    ${Math.atan2(590 - 90, 100 - 100) * (180 / Math.PI)}, 
                    ${(100 + 100) / 2}, 
                    ${(90 + 590) / 2}
                  )
                `}
              >
                --- PATH ----
              </text>
              <text
                x={(820 + 820) / 2}
                y={(90 + 590) / 2}
                fill="#111827"
                fontSize="14"
                textAnchor="middle"
                alignmentBaseline="middle"
                transform={`
                  rotate(
                    ${Math.atan2(590 - 90, 820 - 820) * (180 / Math.PI)}, 
                    ${(820 + 820) / 2}, 
                    ${(90 + 590) / 2}
                  )
                `}
              >
                --- PATH ----
              </text>
              <text
                x={(-420 + 820) / 2}
                y={(90 + 90) / 2}
                fill="#111827"
                fontSize="14"
                textAnchor="middle"
                alignmentBaseline="middle"
                transform={`
                  rotate(
                    ${Math.atan2(90 - 90, 820 + 420) * (180 / Math.PI)}, 
                    ${(820 + 820) / 2}, 
                    ${(90 + 590) / 2}
                  )
                `}
              >
                --- PATH ----
              </text>
              <text
                x={(-420 - 420) / 2}
                y={(590 + 90) / 2}
                fill="#111827"
                fontSize="14"
                textAnchor="middle"
                alignmentBaseline="middle"
                transform={`
                  rotate(
                    ${Math.atan2(590 - 90, -420 + 420) * (180 / Math.PI)}, 
                    ${(-420 - 420) / 2}, 
                    ${(90 + 590) / 2}
                  )
                `}
              >
                --- PATH ----
              </text>
              <text
                x={(-420 + 820) / 2}
                y={(590 + 590) / 2}
                fill="#111827"
                fontSize="14"
                textAnchor="middle"
                alignmentBaseline="middle"
                transform={`
                  rotate(
                    ${Math.atan2(590 - 590, -420 + 820) * (180 / Math.PI)}, 
                    ${(-420 + 820) / 2}, 
                    ${(590 + 590) / 2}
                  )
                `}
              >
                --- PATH ----
              </text>
            </g>
          )}
          {floor.number === 3 && (
            <g className="custom-roads">
              {/* <path
                d="M-600,10 Q-700,10 -700,-200"
                stroke="#9CA3AF"
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
                opacity="0.4"
              /> */}
              <line x1="-420" y1="90" x2="820" y2="90" stroke="#9CA3AF" strokeWidth="10" opacity="0.5" strokeLinecap="round" />
              {/* <line x1="-600" y1="10" x2="1000" y2="10" stroke="#9CA3AF" strokeWidth="10" opacity="0.5" strokeLinecap="round" /> */}
              {/* <line x1="-600" y1="690" x2="1000" y2="690" stroke="#9CA3AF" strokeWidth="10" opacity="0.5" strokeLinecap="round" /> */}
              <line x1="-420" y1="90" x2="-420" y2="590" stroke="#9CA3AF" strokeWidth="10" opacity="0.5" strokeLinecap="round" />
              {/* <line x1="-600" y1="10" x2="-600" y2="690" stroke="#9CA3AF" strokeWidth="10" opacity="0.5" strokeLinecap="round" /> */}
              <line x1="-420" y1="590" x2="820" y2="590" stroke="#9CA3AF" strokeWidth="10" opacity="0.5" strokeLinecap="round" />
              <line x1="820" y1="590" x2="820" y2="90" stroke="#9CA3AF" strokeWidth="10" opacity="0.5" strokeLinecap="round" />
              <line x1="680" y1="-350" x2="400" y2="-350" stroke="#9CA3AF" strokeWidth="10" opacity="0.5" strokeLinecap="round" />
              <line x1="540" y1="-500" x2="540" y2="-250" stroke="#9CA3AF" strokeWidth="10" opacity="0.5" strokeLinecap="round" />
              <line x1="100" y1="90" x2="100" y2="590" stroke="#9CA3AF" strokeWidth="10" opacity="0.5" strokeLinecap="round" />

              {/* Text — positioned & rotated parallel to lines */}
              <text
                x={(100 + 100) / 2}
                y={(90 + 590) / 2}
                fill="#111827"
                fontSize="14"
                textAnchor="middle"
                alignmentBaseline="middle"
                transform={`
                  rotate(
                    ${Math.atan2(590 - 90, 100 - 100) * (180 / Math.PI)}, 
                    ${(100 + 100) / 2}, 
                    ${(90 + 590) / 2}
                  )
                `}
              >
                --- PATH ----
              </text>
              <text
                x={(820 + 820) / 2}
                y={(90 + 590) / 2}
                fill="#111827"
                fontSize="14"
                textAnchor="middle"
                alignmentBaseline="middle"
                transform={`
                  rotate(
                    ${Math.atan2(590 - 90, 820 - 820) * (180 / Math.PI)}, 
                    ${(820 + 820) / 2}, 
                    ${(90 + 590) / 2}
                  )
                `}
              >
                --- PATH ----
              </text>
              <text
                x={(-420 + 820) / 2}
                y={(90 + 90) / 2}
                fill="#111827"
                fontSize="14"
                textAnchor="middle"
                alignmentBaseline="middle"
                transform={`
                  rotate(
                    ${Math.atan2(90 - 90, 820 + 420) * (180 / Math.PI)}, 
                    ${(820 + 820) / 2}, 
                    ${(90 + 590) / 2}
                  )
                `}
              >
                --- PATH ----
              </text>
              <text
                x={(-420 - 420) / 2}
                y={(590 + 90) / 2}
                fill="#111827"
                fontSize="14"
                textAnchor="middle"
                alignmentBaseline="middle"
                transform={`
                  rotate(
                    ${Math.atan2(590 - 90, -420 + 420) * (180 / Math.PI)}, 
                    ${(-420 - 420) / 2}, 
                    ${(90 + 590) / 2}
                  )
                `}
              >
                --- PATH ----
              </text>
              <text
                x={(-420 + 820) / 2}
                y={(590 + 590) / 2}
                fill="#111827"
                fontSize="14"
                textAnchor="middle"
                alignmentBaseline="middle"
                transform={`
                  rotate(
                    ${Math.atan2(590 - 590, -420 + 820) * (180 / Math.PI)}, 
                    ${(-420 + 820) / 2}, 
                    ${(590 + 590) / 2}
                  )
                `}
              >
                --- PATH ----
              </text>
            </g>
          )}

          {/* Draw connections (path lines between rooms) */}
          {floor.connections.map((conn, idx) => {
            const fromRoom = floor.rooms.find(r => r.id === conn.from);
            const toRoom = floor.rooms.find(r => r.id === conn.to);
            if (!fromRoom || !toRoom) return null;

            const isInPath =
              path &&
              path.includes(conn.from) &&
              path.includes(conn.to) &&
              Math.abs(path.indexOf(conn.from) - path.indexOf(conn.to)) === 1;

            return (
              <line
                key={`conn-${idx}`}
                x1={fromRoom.x}
                y1={fromRoom.y}
                x2={toRoom.x}
                y2={toRoom.y}
                stroke={isInPath ? '#3b82f6' : '#d1d5db'}
                strokeWidth={isInPath ? 4 : 2}
                strokeDasharray={isInPath ? '8,4' : 'none'}
              />
            );
          })}

          {/* Draw rooms */}
          {floor.rooms.map(room => {
            const isStairs = room.type === 'stairs';
            const isElevator = room.type === 'elevator';

            const name = room.name || '';
            const lines = name.match(/.{1,15}/g) || [name];
            const lineCount = lines.length;

            const longestWord = lines.reduce((a, b) => (a.length > b.length ? a : b), '');
            const nameLength = longestWord.length;

            const baseWidth = 50;
            const baseHeight = 36;
            const width = Math.max(baseWidth, nameLength * 7);
            const height = baseHeight + (lineCount - 1) * 14;
            const roomColor = getRoomColor(room.id);

            return (
              <g key={room.id}>
                <rect
                  x={room.x - width / 2}
                  y={room.y - height / 2}
                  width={width}
                  height={height}
                  fill={roomColor}
                  stroke="#374151"
                  strokeWidth="2.5"
                  rx={isStairs || isElevator ? '8' : '6'}
                  onClick={() => onRoomClick(room)}
                  style={{
                    cursor: 'pointer',
                    transition: 'all 0.25s ease'
                  }}
                />

                <text
                  x={room.x}
                  y={room.y - (lineCount * 5)}
                  textAnchor="middle"
                  fill="white"
                  fontSize="10"
                  fontWeight="600"
                  pointerEvents="none"
                  dominantBaseline="middle"
                >
                  {lines.map((line, i) => (
                    <tspan key={i} x={room.x} dy={i === 0 ? 0 : 12}>
                      {line}
                    </tspan>
                  ))}
                </text>

                <text
                  x={room.x}
                  y={room.y + height / 2 - 6}
                  textAnchor="middle"
                  fill="white"
                  fontSize="8"
                  opacity="0.9"
                  pointerEvents="none"
                  dominantBaseline="middle"
                >
                  {room.type}
                </text>
              </g>
            );
          })}

          {/* Animated current location marker */}
          {currentLocation && floor.rooms.find(r => r.id === currentLocation) && (
            <circle
              cx={floor.rooms.find(r => r.id === currentLocation).x}
              cy={floor.rooms.find(r => r.id === currentLocation).y}
              r="8"
              fill="none"
              stroke="#10b981"
              strokeWidth="3"
              opacity="0.6"
            >
              <animate attributeName="r" from="8" to="15" dur="1.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="0.6" to="0" dur="1.5s" repeatCount="indefinite" />
            </circle>
          )}
        </svg>
      </div>
      <Legend />
    </div>
  );
};

export default FloorMap;
