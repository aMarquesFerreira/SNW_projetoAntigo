import { NextFunction, Request, Response } from "express";
import { Inject } from "typedi";
import config from "../../config";
import { Result } from "../core/logic/Result";
import { IUserDTO } from "../dto/IUserDTO";
import IUserService from "../services/IServices/IUserService";
import IUserController from "./IControllers/IUserController";

export default class UserController implements IUserController {
    constructor(
        @Inject(config.services.user.name) private userServiceInstance: IUserService,
    ) { }

    public async createUser(req: Request, res: Response, next: NextFunction) {
        try {
            const userOrError = await this.userServiceInstance.createUser(req.body as IUserDTO) as Result<IUserDTO>;

            if (userOrError.isFailure) {
                return res.status(402).send();
            }

            const userDTO = userOrError.getValue();
            return res.status(201).json(userDTO);
        }catch (e) {
            return next(e);
        }
    };

    public async updateUser(req: Request, res: Response, next: NextFunction) {
        throw new Error("Method not implemented.");
    };

    public async getAllUsers(req: Request, res: Response, next: NextFunction) {
        try {
            const userOrError = await this.userServiceInstance.getAllUsers() as Result<IUserDTO[]>;
            
            if (userOrError.isFailure) {
                return res.status(402).send();
            }

            const userDTO = userOrError.getValue();
            return res.status(201).json(userDTO);
        } catch (e) {
            return next(e);
        }
    };

    public async getUserByEmail(req: Request, res: Response, next: NextFunction) {
        try {
    
          const userOrError = await this.userServiceInstance.getUserByEmail(req.params.email) as Result<IUserDTO>;
    
          if (userOrError.isFailure) {
            return res.status(402).send();
          }
    
          const userDTO = userOrError.getValue();
          return res.status(201).json(userDTO);
        }
        catch (e) {
          return res.status(201).json("Not Found");
        }
      };
}