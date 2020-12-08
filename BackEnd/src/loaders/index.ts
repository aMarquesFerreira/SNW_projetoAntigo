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

  const DriverTypeSchema = {
    name: 'DriverTypeSchema',
    schema: '../persistence/schemas/DriverTypeSchema',

  };

  const VehicleTypeSchema = {
    name: 'VehicleTypeSchema',
    schema: '../persistence/schemas/VehicleTypeSchema',
  };

  const PathSchema = {
    name: 'PathSchema',
    schema: '../persistence/schemas/PathSchema',
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

  const DriverTypeController = {
    name: config.controller.driverType.name,
    path: config.controller.driverType.path
  }

  const VehicleTypeController = {
    name: config.controller.vehicleType.name,
    path: config.controller.vehicleType.path
  }

  const PathController = {
    name: config.controller.path.name,
    path: config.controller.path.path
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

  const DriverTypeRepo = {
    name: config.repos.driverType.name,
    path: config.repos.driverType.path
  }
  
  const VehicleTypeRepo = {
    name: config.repos.vehicleType.name,
    path: config.repos.vehicleType.path
  }

  const PathRepo = {
    name: config.repos.path.name,
    path: config.repos.path.path
  }
  
  const TravelLineRepo = {
    name: config.repos.travelLine.name,
    path: config.repos.travelLine.path
  }

  const NodeService = {
    name: config.services.node.name,
    path: config.services.node.path
  }

  const DriverTypeService = {
    name: config.services.driverType.name,
    path: config.services.driverType.path
  }

  const VehicleTypeService = {
    name: config.services.vehicleType.name,
    path: config.services.vehicleType.path
  }

  const PathService = {
    name: config.services.path.name,
    path: config.services.path.path
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
      DriverTypeSchema,
      VehicleTypeSchema,
      PathSchema,
      TravelLineSchema,
    ],
    controllers: [
      NodeController,
      DriverTypeController,
      VehicleTypeController,
      PathController,
      TravelLineController,
      ImporterController,
    ],
    repos: [
      NodeRepo,
      DriverTypeRepo,
      VehicleTypeRepo,
      PathRepo,
      TravelLineRepo,
    ],
    services: [
      NodeService,
      DriverTypeService,
      VehicleTypeService,
      PathService,
      TravelLineService,
      ImporterService
    ]
  });
  Logger.info('✌️ Schemas, Controllers, Repositories, Services, etc. loaded');

  await expressLoader({ app: expressApp });
  Logger.info('✌️ Express loaded');
};
