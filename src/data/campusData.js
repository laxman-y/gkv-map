// Campus data structure
export const campusData = {
  buildings: [
    {
      id: 'engineering',
      name: 'Engineering Block',
      floors: [
        {
          number: 1,
          rooms: [
            { id: 'e5', name: 'MAIN ENTRY GATE', x: -700, y: -200, type: 'GATE' },
            { id: 'e5', name: 'VEHICALS PARKING ZONE', x: -200, y: -150, type: 'GATE' },
            { id: 'e6', name: 'CANTEEN', x: -700, y: 550, type: 'CANTEEN' },
            { id: 'e7', name: 'MESS', x: -700, y: 650, type: 'MESS' },
            { id: 'e8', name: 'MAHARSHI VALLMIKI HOSTEL', x: -700, y: 750, type: 'HOSTEL' },
            { id: 'e9', name: 'RIGHT', x: 680, y: -350, type: 'DIRECTION' },
            { id: 'e10', name: 'LEFT', x: 400, y: -350, type: 'DIRECTION' },
            { id: 'e11', name: '1-GROUND FLOOR 2-FIRST FLOOR  3-SECOND FLOOR', x: 840, y: -500, type: 'DIRECTION' },
            { id: 'e11', name: 'UP', x: 540, y: -500, type: 'DIRECTION' },
            { id: 'e12', name: 'DOWN', x: 540, y: -250, type: 'DIRECTION' },
            { id: 'e103', name: 'CLASSROOM 103', x: -350, y: 50, type: 'classroom' },
            { id: 'e102', name: 'CLASSROOM 102', x: -50, y: 50, type: 'classroom' },
            { id: 'e100', name: 'ENTRYDOOR', x: 180, y: 50, type: 'RECEPTION HALL' },
            { id: 'e128', name: 'CLASSROOM 128 & INSIDE STAIRS FOR FLOOR 1,2..', x: 450, y: 50, type: 'classroom' },
            { id: 'e127', name: 'CLASSROOM 127', x: 750, y: 50, type: 'classroom' },

            { id: 'e110', name: 'CLASSROOM 110 & INSIDE STAIRS FOR FLOOR 1,2..', x: -350, y: 350, type: 'classroom' },
            { id: 'e1', name: 'NEW SEMINAR HALL', x: 180, y: 350, type: 'SEMINAR HALL' },
            //  { id: 'C126', name: 'Cabin-126', x: 600, y: 315, type: 'Dr. Sunil' },
             { id: 'e126', name: 'DR. SANJEEV KUMAR LAMBHA & DR. SUNIL PAWAR & INSIDE STAIRS FOR FLOOR 1,2..', x: 750, y: 350, type: 'CABIN-126' },

              { id: 'e109', name: 'ELECTRICAL MACHINE LAB', x: -350, y: 650, type: 'LAB-109' },
            { id: 'e111', name: 'DR. NAMIT KHANDUJA & ..', x: -220, y: 650, type: 'CABIN-111' },
            // { id: 'e10', name: 'Entry', x: 120, y: 650, type: 'point' },
            { id: 'e112', name: 'GAJENDRA SINGH RAWAT', x: -90, y: 650, type: 'CABIN-112' },
            { id: 'e113', name: 'DR.TANUJ GARG', x: 30, y: 650, type: 'CABIN-113' },
            { id: 'e114', name: 'DR.VIPUL SHARMA', x: 150, y: 650, type: 'CABIN-114' },
            { id: 'e115', name: 'DR. MAYANK KUMAR AGARWAL', x: 280, y: 650, type: 'CABIN-115' },
            { id: 'e116', name: 'OFFICE', x: 400, y: 650, type: 'OFFICE-116' },
            { id: 'e2', name: 'DR. MAYANK KUMAR AGARWAL', x: 520, y: 650, type: 'DEAN OFFICE' },
            { id: 'e117', name: 'CABIN-117', x: 630, y: 650, type: 'CABIN-117' },
            { id: 'e118', name: 'MACHENICAL SEMINAR HALL', x: 750, y: 650, type: 'SEMINAR HALL-118' },

            { id: 'e104', name: 'TOILET-104', x: -500, y: 50, type: 'SHE' },
            { id: 'e105', name: 'CABIN-105', x: -500, y: 150, type: 'Dr. Sunil' },
            { id: 'e3', name: 'DR. SUYASH BHARDWAJ', x: -500, y: 250, type: 'Cabin' },
            { id: 'e106', name: 'POWER ELECTRONICS LAB', x: -500, y: 350, type: 'lab-106' },
            { id: 'e107', name: 'POWER SYSTEMS LAB', x: -500, y: 450, type: 'lab-107' },
            { id: 'e4', name: 'ASHISH DHAMANDA & GAURAV KUMAR', x: -500, y: 550, type: 'cabin' },
            { id: 'e108', name: 'TOILET-108', x: -500, y: 650, type: 'HE' },

            { id: 'e125', name: 'TOILET-125', x: 900, y: 50, type: 'HE' },
            { id: 'e124', name: 'POWER SUPPLY STORE', x: 900, y: 150, type: 'STORE-124' },
            { id: 'e123', name: 'OLD SEMINAR HALL', x: 900, y: 250, type: 'SEMINAR HALL-123' },
            { id: 'e122', name: 'DR.VIVEK GOEL & DR. LOKESH KUMAR JOSHI', x: 900, y: 350, type: 'CABIN-122' },
            { id: 'e121', name: 'DR.AJAY KUMAR', x: 900, y: 450, type: 'CABIN-121' },
            { id: 'e120', name: 'CHEMISTRY LAB', x: 900, y: 550, type: 'LAB-120' },
            { id: 'e119', name: 'TOILET-119', x: 900, y: 650, type: 'HE' }
          ],
          connections: [
            
            // STARTING TO CONNECT ROOMS
            { from: 'e5', to: 'e6', distance: 10 },
            { from: 'e6', to: 'e7', distance: 10 },
            { from: 'e7', to: 'e8', distance: 10 },
            { from: 'e7', to: 'e108', distance: 10 },
            { from: 'e100', to: 'e102', distance: 10 },
            { from: 'e102', to: 'e103', distance: 10 },
            { from: 'e103', to: 'e104', distance: 10 },
            { from: 'e104', to: 'e105', distance: 10 },
            { from: 'e105', to: 'e3', distance: 10 },
            { from: 'e3', to: 'e106', distance: 10 },
            { from: 'e106', to: 'e107', distance: 10 },
            { from: 'e107', to: 'e4', distance: 10 },
            { from: 'e4', to: 'e108', distance: 25 },
            { from: 'e108', to: 'e109', distance: 25 },
            { from: 'e109', to: 'e111', distance: 25 },
            { from: 'e111', to: 'e112', distance: 25 },
            { from: 'e112', to: 'e113', distance: 25 },
            { from: 'e113', to: 'e114', distance: 25 },
            { from: 'e114', to: 'e115', distance: 25 },
            { from: 'e115', to: 'e116', distance: 25 },
            { from: 'e116', to: 'e2', distance: 25 },
            { from: 'e2', to: 'e117', distance: 25 },
            { from: 'e117', to: 'e118', distance: 25 },
            { from: 'e118', to: 'e119', distance: 25 },
            { from: 'e119', to: 'e120', distance: 25 },
            { from: 'e120', to: 'e121', distance: 25 },
            { from: 'e121', to: 'e122', distance: 25 },
            { from: 'e122', to: 'e123', distance: 25 },
            { from: 'e123', to: 'e124', distance: 25 },
            { from: 'e124', to: 'e125', distance: 25 },
            { from: 'e125', to: 'e127', distance: 25 },
            { from: 'e127', to: 'e128', distance: 25 },
            { from: 'e128', to: 'e100', distance: 25 },

            { from: 'e100', to: 'e1', distance: 25 },
            { from: 'e1', to: 'e114', distance: 25 },
            { from: 'e110', to: 'e106', distance: 25 },
            { from: 'e126', to: 'e122', distance: 25 }
          ]
        },
        {
          number: 2,
          rooms: [
            { id: 'e9', name: 'RIGHT', x: 680, y: -350, type: 'DIRECTION' },
            { id: 'e10', name: 'LEFT', x: 400, y: -350, type: 'DIRECTION' },
            { id: 'e11', name: '1-GROUND FLOOR 2-FIRST FLOOR  3-SECOND FLOOR', x: 840, y: -500, type: 'DIRECTION' },
            { id: 'e11', name: 'UP', x: 540, y: -500, type: 'DIRECTION' },
            { id: 'e12', name: 'DOWN', x: 540, y: -250, type: 'DIRECTION' },
            { id: 'e202', name: 'MEASURMENT LAB & CIRCUIT THEORY LAB - 202 & INSIDE DR. BRIJESH KUMAR', x: -350, y: 50, type: 'LAB' },
            { id: 'e201', name: 'EXAMINATION CONTROL ROOM 201', x: -50, y: 50, type: 'ROOM' },
            // { id: 'e100', name: 'ENTRYDOOR', x: 180, y: 50, type: 'RECEPTION HALL' },
            { id: 'e224', name: 'CLASSROOM 224 & INSIDE STAIRS FOR FLOOR 1,2..', x: 200, y: 50, type: 'classroom' },
            { id: 'e223', name: 'CLASSROOM 223', x: 650, y: 50, type: 'classroom' },

            { id: 'e226', name: 'CAD LAB 226 & INSIDE STAIRS FOR FLOOR 1,2..', x: -350, y: 350, type: 'LAB' },
            { id: 'e225', name: 'CLASSROOM - 225', x: 180, y: 350, type: 'CLASSROOM' },
             { id: 'e222', name: 'DIGITAL SYSTEM DESIGN LAB-222 & INSIDE STAIRS FOR FLOOR 1,2..', x: 750, y: 350, type: 'LAB' },


              { id: 'e208', name: 'CLASSROOM - 208', x: -350, y: 650, type: 'CLASSROOM' },
            { id: 'e209', name: 'DR. ATUL KUMAR & PRATEEK AGRAWAL', x: -220, y: 650, type: 'CABIN-209' },
            // { id: 'e10', name: 'Entry', x: 120, y: 650, type: 'point' },
            { id: 'e210', name: 'GAJENDRA SINGH RAWAT-210', x: -90, y: 650, type: 'CABIN-210' },
            { id: 'e211', name: 'MR. VIVUDH FORE &  SHASHANK SHARMA', x: 30, y: 650, type: 'CABIN-211' },
            { id: 'e212', name: 'M.TECH CSE-212', x: 150, y: 650, type: 'CLASSROOM' },
            { id: 'e213', name: 'M.TECH ECE-213', x: 280, y: 650, type: 'CLASSROOM' },
            { id: 'e214', name: 'TOILET-214', x: 500, y: 650, type: 'SHE' },
            // { id: 'e2', name: 'DR. MAYANK KUMAR AGARWAL', x: 520, y: 650, type: 'DEAN OFFICE' },
            // { id: 'e117', name: 'CABIN-117', x: 630, y: 650, type: 'CABIN-117' },
            { id: 'e215', name: 'CLASSROOM - 215 & TUTORIAL ROOM-216', x: 750, y: 650, type: 'CLASSROOM' },

            { id: 'e203', name: 'TOILET-203', x: -500, y: 50, type: 'HE' },
            { id: 'e204', name: 'MR.VIVEK KUMAR-204', x: -500, y: 150, type: 'CABIN-204' },
            { id: 'e3', name: 'MR.YOGESH KUMAR', x: -500, y: 250, type: 'Cabin' },
            { id: 'e205', name: 'NEW IBM LAB-205', x: -500, y: 350, type: 'LAB-205' },
            { id: 'e206', name: 'OLD IBM LAB-206 & MR. DEVANAND JOSHI', x: -500, y: 450, type: 'LAB-206' },
            { id: 'e207', name: 'TOILET-207', x: -500, y: 650, type: 'HE' },


            { id: 'e221', name: 'TOILET-221', x: 900, y: 50, type: 'HE' },
            { id: 'e220', name: 'MR.AMRISH, DR.ASHISH NAINWAL & DR. GORAV KUMAR MALIK-220', x: 900, y: 150, type: 'CABIN-220' },
            { id: 'e219', name: 'COMPUTER CENTRE-219', x: 900, y: 350, type: 'LAB' },
            // { id: 'e122', name: 'DR.VIVEK GOEL & DR. LOKESH KUMAR JOSHI', x: 900, y: 350, type: 'CABIN-122' },
            { id: 'e218', name: 'DR.DEVENDRA SINGH & PHYSICS LAB-218', x: 900, y: 550, type: 'CABIN-218' },
            // { id: 'e120', name: 'CHEMISTRY LAB', x: 900, y: 550, type: 'LAB-120' },
            { id: 'e217', name: 'TOILET-217', x: 900, y: 650, type: 'HE' }
          ],
          connections: [
            { from: 'e201', to: 'e202', distance: 10 },
            { from: 'e202', to: 'e203', distance: 10 },
            { from: 'e203', to: 'e204', distance: 10 },
            { from: 'e204', to: 'e205', distance: 10 },
            { from: 'e205', to: 'e3', distance: 10 },
            { from: 'e3', to: 'e206', distance: 10 },
            { from: 'e206', to: 'e207', distance: 10 },
            { from: 'e207', to: 'e208', distance: 10 },
            { from: 'e208', to: 'e209', distance: 25 },
            { from: 'e209', to: 'e210', distance: 25 },
            { from: 'e210', to: 'e211', distance: 25 },
            { from: 'e211', to: 'e212', distance: 25 },
            { from: 'e212', to: 'e213', distance: 25 },
            { from: 'e213', to: 'e214', distance: 25 },
            { from: 'e214', to: 'e215', distance: 25 },
            { from: 'e215', to: 'e216', distance: 25 },
            { from: 'e216', to: 'e217', distance: 25 },
            { from: 'e217', to: 'e218', distance: 25 },
            { from: 'e218', to: 'e219', distance: 25 },
            { from: 'e219', to: 'e220', distance: 25 },
            { from: 'e220', to: 'e221', distance: 25 },
            { from: 'e221', to: 'e223', distance: 25 },
            { from: 'e223', to: 'e224', distance: 25 },
            { from: 'e224', to: 'e201', distance: 25 },
            { from: 'e205', to: 'e226', distance: 25 },
            { from: 'e124', to: 'e125', distance: 25 },
            { from: 'e125', to: 'e127', distance: 25 },
            { from: 'e127', to: 'e128', distance: 25 },
            { from: 'e128', to: 'e100', distance: 25 },

            { from: 'e100', to: 'e1', distance: 25 },
            { from: 'e1', to: 'e114', distance: 25 },
            { from: 'e110', to: 'e106', distance: 25 },
            { from: 'e126', to: 'e122', distance: 25 },
            { from: 'e224', to: 'e225', distance: 25 },
            { from: 'e225', to: 'e212', distance: 25 },
            { from: 'e222', to: 'e219', distance: 25 }
          ]
        },
        {
          number: 3,
          rooms: [
            { id: 'e9', name: 'RIGHT', x: 680, y: -350, type: 'DIRECTION' },
            { id: 'e10', name: 'LEFT', x: 400, y: -350, type: 'DIRECTION' },
            { id: 'e11', name: '1-GROUND FLOOR 2-FIRST FLOOR  3-SECOND FLOOR', x: 840, y: -500, type: 'DIRECTION' },
            { id: 'e11', name: 'UP', x: 540, y: -500, type: 'DIRECTION' },
            { id: 'e12', name: 'DOWN', x: 540, y: -250, type: 'DIRECTION' },
            { id: 'e302', name: 'CLASSROOM 302', x: -350, y: 50, type: 'CLASSROOM' },
            { id: 'e320', name: 'CLASSROOM 320', x: -50, y: 50, type: 'CLASSROOM' },
            // { id: 'e100', name: 'ENTRYDOOR', x: 180, y: 50, type: 'RECEPTION HALL' },
            { id: 'e318', name: 'CLASSROOM 318 & INSIDE STAIRS FOR FLOOR 1,2..', x: 200, y: 50, type: 'classroom' },
            { id: 'e317', name: 'CLASSROOM 317', x: 650, y: 50, type: 'classroom' },


            { id: 'e319', name: 'CLASSROOM 319 & INSIDE STAIRS FOR FLOOR 1,2..', x: -350, y: 350, type: 'CLASSROOM' },
             { id: 'e316', name: 'MICROPROCESSOR LAB-316 & INSIDE STAIRS FOR FLOOR 1,2..', x: 750, y: 350, type: 'LAB' },


              { id: 'e306', name: 'CLASSROOM - 306', x: -350, y: 650, type: 'CLASSROOM' },
            { id: 'e307', name: 'CLASSROOM - 307 & CLASSROOM-308', x: 750, y: 650, type: 'CLASSROOM' },

            { id: 'e303', name: 'TOILET-303', x: -500, y: 50, type: 'HE' },
            { id: 'e304', name: '...-304', x: -500, y: 350, type: 'CABIN-304' },
            { id: 'e305', name: 'LIBRARY-305', x: -500, y: 650, type: 'LIBRARY' },


            { id: 'e315', name: 'TOILET-315', x: 900, y: 50, type: 'HE' },
            { id: 'e314', name: 'DR.SANJAY SINGH-314', x: 900, y: 150, type: 'CABIN-314' },
            { id: 'e313', name: 'COMMUNICATION LAB-313', x: 900, y: 250, type: 'LAB-313' },
            { id: 'e312', name: 'ECE LAB-312', x: 900, y: 350, type: 'LAB-312' },
            { id: 'e311', name: 'SIMULATION LAB-311', x: 900, y: 450, type: 'LAB-311' },
            { id: 'e310', name: 'MICROWAVE LAB-310', x: 900, y: 550, type: 'LAB-310' },
            { id: 'e309', name: 'TOILET-309', x: 900, y: 650, type: 'HE' }
          ],
          connections: [
            { from: 'e320', to: 'e302', distance: 10 },
            { from: 'e302', to: 'e303', distance: 10 },
            { from: 'e303', to: 'e304', distance: 10 },
            { from: 'e304', to: 'e305', distance: 10 },
            { from: 'e305', to: 'e306', distance: 10 },
            { from: 'e306', to: 'e307', distance: 10 },
            { from: 'e307', to: 'e309', distance: 10 },
            { from: 'e309', to: 'e310', distance: 10 },
            { from: 'e310', to: 'e311', distance: 25 },
            { from: 'e311', to: 'e312', distance: 25 },
            { from: 'e312', to: 'e313', distance: 25 },
            { from: 'e313', to: 'e314', distance: 25 },
            { from: 'e314', to: 'e315', distance: 25 },
            { from: 'e315', to: 'e317', distance: 25 },
            { from: 'e317', to: 'e318', distance: 25 },
            { from: 'e318', to: 'e320', distance: 25 },
            { from: 'e304', to: 'e319', distance: 25 },
            { from: 'e312', to: 'e316', distance: 25 },
          ]
        },
      ]
    }
  ]
};

// Helper function to get all rooms across all buildings
export const getAllRooms = () => {
  const allRooms = [];
  campusData.buildings.forEach(building => {
    building.floors.forEach(floor => {
      floor.rooms.forEach(room => {
        allRooms.push({
          ...room,
          buildingId: building.id,
          buildingName: building.name,
          floorNumber: floor.number
        });
      });
    });
  });
  return allRooms;
};

// Get room emoji based on type
export const getRoomTypeLabel = (type) => {
  const labels = {
    classroom: '🎓',
    lab: '🔬',
    common: '🏛️',
    stairs: '🪜',
    elevator: '🛗',
    washroom: '🚻'
  };
  return labels[type] || '📍';
};