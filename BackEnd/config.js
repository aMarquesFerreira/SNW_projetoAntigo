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
    
    user: {
      name: "UserController",
      path: "../controllers/UserController"
    },
    
    sneakers: {
      name: "SneakersController",
      path: "../controllers/SneakersController"
    },
    
    import: {
      name: "ImporterController",
      path: "../controllers/ImporterController"
    },

    personalized: {
      name: "PersonalizedController",
      path:"../controllers/PersonalizedController"
    }
  },

  repos: {
    
    user: {
      name: "UserRepo",
      path: "../repositories/UserRepo"
    },
    
    sneakers: {
      name: "SneakersRepo",
      path: "../repositories/SneakersRepo"
    },

    personalized: {
      name: "PersonalizedRepo",
      path:"../controllers/PersonalizedRepo"
    },

  },

  services: {

    user: {
      name: "UserService",
      path: "../services/UserService"
    },
    
    
    sneakers: {
      name: "SneakersService",
      path: "../services/SneakersService"
    },

    import: {
      name: "ImporterService",
      path: "../services/ImporterService"
    },

    personalized: {
      name: "PersonalizedService",
      path:"../controllers/PersonalizedService"
    },
  },
};
