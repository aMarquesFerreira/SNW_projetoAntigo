import dotenv from 'dotenv';

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (!envFound) {
  // This error should crash whole process

  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
  /**
   * Your favorite port
   */
  port: parseInt(process.env.PORT, 10),

  /**
   * That long string from mlab
   */
  databaseURL: process.env.MONGODB_URI,

  /**
   * Your secret sauce
   */
  jwtSecret: process.env.JWT_SECRET,

  /**
   * Used by winston logger
   */
  logs: {
    level: process.env.LOG_LEVEL || 'silly',
  },

  /**
   * API configs
   */
  api: {
    prefix: '/api',
  },

  controller: {
    node: {
      name: "NodeController",
      path: "../controllers/NodeController"
    },
    
    driverType: {
      name: "DriverTypeController",
      path: "../controllers/DriverTypeController"
    },
    
    vehicleType: {
      name: "VehicleTypeController",
      path: "../controllers/VehicleTypeController"
    },

    path: {
      name: "PathController",
      path: "../controllers/PathController"
    },

    travelLine: {
      name: "TravelLineController",
      path: "../controllers/TravelLineController"

    },
    
    import: {
      name: "ImporterController",
      path: "../controllers/ImporterController"
    }
  },

  repos: {
    node: {
      name: "NodeRepo",
      path: "../repositories/NodeRepo"
    },
    
    driverType: {
      name: "DriverTypeRepo",
      path: "../repositories/DriverTypeRepo"
    },
    
    vehicleType: {
      name: "VehicleTypeRepo",
      path: "../repositories/VehicleTypeRepo"
    },

    path: {
      name: "PathRepo",
      path: "../repositories/PathRepo"
    },

    travelLine: {
      name: "TravelLineRepo",
      path: "../repositories/TravelLineRepo"

    }
  },

  services: {
    node: {
      name: "NodeService",
      path: "../services/NodeService"
    },
    
    driverType: {
      name: "DriverTypeService",
      path: "../services/DriverTypeService"
    },
    
    vehicleType: {
      name: "VehicleTypeService",
      path: "../services/VehicleTypeService"
    },
    
    path: {
      name: "PathService",
      path: "../services/PathService"
    },

    travelLine: {
      name: "TravelLineService",
      path: "../services/TravelLineService"

    },

    import: {
      name: "ImporterService",
      path: "../services/ImporterService"
    }
  },
};
