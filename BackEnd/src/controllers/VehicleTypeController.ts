// import { Request, Response, NextFunction } from 'express';
// import { Inject } from 'typedi';
// import config from "../../config";

// import IVehicleTypeController from "./IControllers/IVehicleTypeController";
// import IVehicleTypeService from '../services/IServices/IVehicleTypeService';
// import { IVehicleTypeDTO } from '../dto/IVehicleTypeDTO';

// import { Result } from "../core/logic/Result";

// export default class VehicleTypeController implements IVehicleTypeController /* TODO: extends ../core/infra/BaseController */ {
//   constructor(
//     @Inject(config.services.vehicleType.name) private vehicleTypeServiceInstance: IVehicleTypeService,
//   ) { }

//   public async createVehicleType(req: Request, res: Response, next: NextFunction) {
//     try {
//       const vehicleTypeOrError = await this.vehicleTypeServiceInstance.createVehicleType(req.body as IVehicleTypeDTO) as Result<IVehicleTypeDTO>;

//       if (vehicleTypeOrError.isFailure) {
//         return res.status(402).send();
//       }

//       const vehicleTypeDTO = vehicleTypeOrError.getValue();
//       return res.status(201).json(vehicleTypeDTO);
//     }
//     catch (e) {
//       return next(e);
//     }
//   };

//   public async getAllVehicleTypes(req: Request, res: Response, next: NextFunction) {
//     try {
//       const vehicleTypeListOrError = await this.vehicleTypeServiceInstance.getAllVehicleTypes() as Result<IVehicleTypeDTO[]>;

//       if (vehicleTypeListOrError.isFailure) {
//         return res.status(402).send();
//       }

//       const vehicleTypesDTO = vehicleTypeListOrError.getValue();
//       return res.status(200).json(vehicleTypesDTO);
//     }
//     catch (e) {
//       return next(e);
//     }
//   };

//   public async getVehicleTypeByVehicleId(req: Request, res: Response, next: NextFunction) {
//     try {

//       const vehicleTypeOrError = await this.vehicleTypeServiceInstance.getVehicleTypesByVehicleId(req.params.vehicleId) as Result<IVehicleTypeDTO>;

//       if (vehicleTypeOrError.isFailure) {
//         return res.status(402).send();
//       }

//       const vehicleTypeDTO = vehicleTypeOrError.getValue();
//       return res.status(200).json(vehicleTypeDTO);
//     }
//     catch (e) {
//       return res.status(201).json("Not Found");
//     }
//   };
// }