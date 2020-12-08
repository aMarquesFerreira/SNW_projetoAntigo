import expressLoader from './express';
import dependencyInjectorLoader from './dependencyInjector';
import mongooseLoader from './mongoose';
import Logger from './logger';
import config from '../../config';
import ImporterController from '../controllers/ImporterController';

export default async ({ expressApp }) => {
  const mongoConnection = await mongooseLoader();
  Logger.info('✌️ DB loaded and connected!');

  const NodeSchema = {
    // compare with the approach followed in repos and services
    name: 'NodeSchema',
    schema: '../persistence/schemas/NodeSchema',
  };

  const UserSchema = {
    name: 'UserSchema',
    schema: '../persistence/schemas/UserSchema',

  };

  const VehicleTypeSchema = {
    name: 'VehicleTypeSchema',
    schema: '../persistence/schemas/VehicleTypeSchema',
  };

  const SneakersSchema = {
    name: 'SneakersSchema',
    schema: '../persistence/schemas/SneakersSchema',
  }

  const TravelLineSchema = {
    // compare with the approach followed in repos and services
    name: 'TravelLineSchema',
    schema: '../persistence/schemas/TravelLineSchema',
  };

  const NodeController = {
    name: config.controller.node.name,
    path: config.controller.node.path
  }

  const UserController = {
    name: config.controller.user.name,
    path: config.controller.user.path
  }

  const VehicleTypeController = {
    name: config.controller.vehicleType.name,
    path: config.controller.vehicleType.path
  }

  const SneakersController = {
    name: config.controller.sneakers.name,
    path: config.controller.sneakers.path
  }

  const TravelLineController = {
    name: config.controller.travelLine.name,
    path: config.controller.travelLine.path
  }

  const ImporterController = {
    name: config.controller.import.name,
    path: config.controller.import.path
  }

  const NodeRepo = {
    name: config.repos.node.name,
    path: config.repos.node.path
  }

  const UserRepo = {
    name: config.repos.user.name,
    path: config.repos.user.path
  }
  
  const VehicleTypeRepo = {
    name: config.repos.vehicleType.name,
    path: config.repos.vehicleType.path
  }

  const SneakersRepo = {
    name: config.repos.sneakers.name,
    path: config.repos.sneakers.path
  }
  
  const TravelLineRepo = {
    name: config.repos.travelLine.name,
    path: config.repos.travelLine.path
  }

  const NodeService = {
    name: config.services.node.name,
    path: config.services.node.path
  }

  const UserService = {
    name: config.services.user.name,
    path: config.services.user.path
  }

  const VehicleTypeService = {
    name: config.services.vehicleType.name,
    path: config.services.vehicleType.path
  }

  const SneakersService = {
    name: config.services.sneakers.name,
    path: config.services.sneakers.path
  }

  const TravelLineService = {
    name: config.services.travelLine.name,
    path: config.services.travelLine.path
  }

  const ImporterService = {
    name: config.services.import.name,
    path: config.services.import.path
  }

  await dependencyInjectorLoader({
    mongoConnection,
    schemas: [
      NodeSchema,
      UserSchema,
      VehicleTypeSchema,
      SneakersSchema,
      TravelLineSchema,
    ],
    controllers: [
      NodeController,
      UserController,
      VehicleTypeController,
      SneakersController,
      TravelLineController,
      ImporterController,
    ],
    repos: [
      NodeRepo,
      UserRepo,
      VehicleTypeRepo,
      SneakersRepo,
      TravelLineRepo,
    ],
    services: [
      NodeService,
      UserService,
      VehicleTypeService,
      SneakersService,
      TravelLineService,
      ImporterService
    ]
  });
  Logger.info('✌️ Schemas, Controllers, Repositories, Services, etc. loaded');

  await expressLoader({ app: expressApp });
  Logger.info('✌️ Express loaded');
};
