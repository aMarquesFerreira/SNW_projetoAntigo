import { NextFunction, Request, Response } from "express";
import { Inject } from "typedi";
import config from "../../config";
import { Result } from "../core/logic/Result";
import { IDriverTypeDTO } from "../dto/IDriverTypeDTO";
import IDriverTypeService from "../services/IServices/IDriverTypeService";
import IDriverTypeController from "./IControllers/IDriverTypeController";

export default class DriverTypeController implements IDriverTypeController {
    constructor(
        @Inject(config.services.driverType.name) private driverTypeServiceInstance: IDriverTypeService,
    ) { }

    public async createDriverType(req: Request, res: Response, next: NextFunction) {
        try {
            const driverTypeOrError = await this.driverTypeServiceInstance.createDriverType(req.body as IDriverTypeDTO) as Result<IDriverTypeDTO>;

            if (driverTypeOrError.isFailure) {
                return res.status(402).send();
            }

            const driverTypeDTO = driverTypeOrError.getValue();
            return res.status(201).json(driverTypeDTO);
        }catch (e) {
            return next(e);
        }
    };

    public async updateDriverType(req: Request, res: Response, next: NextFunction) {
        throw new Error("Method not implemented.");
    };

    public async getAllDriverTypes(req: Request, res: Response, next: NextFunction) {
        try {
            const driverTypeOrError = await this.driverTypeServiceInstance.getAllDriverTypes() as Result<IDriverTypeDTO[]>;
            
            if (driverTypeOrError.isFailure) {
                return res.status(402).send();
            }

            const driverTypesDTO = driverTypeOrError.getValue();
            return res.status(201).json(driverTypesDTO);
        } catch (e) {
            return next(e);
        }
    };

    public async getDriverTypeByCode(req: Request, res: Response, next: NextFunction) {
        try {
    
          const driverTypeOrError = await this.driverTypeServiceInstance.getDriverTypeByCode(req.params.code) as Result<IDriverTypeDTO>;
    
          if (driverTypeOrError.isFailure) {
            return res.status(402).send();
          }
    
          const driverTypeDTO = driverTypeOrError.getValue();
          return res.status(201).json(driverTypeDTO);
        }
        catch (e) {
          return res.status(201).json("Not Found");
        }
      };
}