// Breadth-First Search (BFS) pathfinding algorithm
export const findPath = (graph, start, end) => {
  if (!start || !end || !graph[start]) {
    return null;
  }

  const queue = [[start]];
  const visited = new Set([start]);
  
  while (queue.length > 0) {
    const path = queue.shift();
    const node = path[path.length - 1];
    
    if (node === end) {
      return path;
    }
    
    const neighbors = graph[node] || [];
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([...path, neighbor]);
      }
    }
  }
  
  return null;
};

// Build graph from floor connections
export const buildGraph = (floor) => {
  if (!floor) return {};
  
  const graph = {};
  floor.connections.forEach(conn => {
    if (!graph[conn.from]) graph[conn.from] = [];
    if (!graph[conn.to]) graph[conn.to] = [];
    graph[conn.from].push(conn.to);
    graph[conn.to].push(conn.from);
  });
  
  return graph;
};

// Calculate total distance of path
export const calculatePathDistance = (path, floor) => {
  if (!path || path.length < 2 || !floor) return 0;
  
  let totalDistance = 0;
  for (let i = 0; i < path.length - 1; i++) {
    const connection = floor.connections.find(
      conn => 
        (conn.from === path[i] && conn.to === path[i + 1]) ||
        (conn.from === path[i + 1] && conn.to === path[i])
    );
    if (connection) {
      totalDistance += connection.distance;
    }
  }
  
  return totalDistance;
};

// Generate step-by-step directions
export const generateDirections = (path, floor) => {
  if (!path || !floor) return [];
  
  return path.map((roomId, idx) => {
    const room = floor.rooms.find(r => r.id === roomId);
    if (!room) return null;
    
    let instruction = '';
    if (idx === 0) {
      instruction = 'Start at';
    } else if (idx === path.length - 1) {
      instruction = 'Arrive at';
    } else {
      instruction = 'Pass through';
    }
    
    return {
      step: idx + 1,
      instruction,
      room: room.name,
      type: room.type
    };
  }).filter(Boolean);
};