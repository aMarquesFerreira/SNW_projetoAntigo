import { NextFunction, Request, Response } from "express";
import { Inject } from "typedi";
import config from "../../config";
import { Result } from "../core/logic/Result";
import { ISneakersDTO } from "../dto/ISneakersDTO";
import IPathService from "../services/IServices/ISneakersService";
import IPathController from "./IControllers/IPathController";

export default class PathController implements IPathController {
    constructor(
        @Inject(config.services.path.name) private pathServiceInstance: IPathService,
    ) { }

    public async createPath(req: Request, res: Response, next: NextFunction){
        try {
            const pathOrError = await this.pathServiceInstance.createPath(req.body as ISneakersDTO) as Result<ISneakersDTO>;

            if (pathOrError.isFailure) {
                return res.status(402).send();
            }

            const pathDTO = pathOrError.getValue();
            return res.status(201).json(pathDTO);
        }catch (e) {
            return next(e);
        }
    };

    public async updatePath(req: Request, res: Response, next: NextFunction){
        throw new Error("Method not implemented.");
    };

    public async getAllPaths(req: Request, res: Response, next: NextFunction){
        try {
            const pathOrError = await this.pathServiceInstance.getAllPaths() as Result<IPathDTO[]>;

            if (pathOrError.isFailure) {
                return res.status(402).send();
            }

            const pathDTO = pathOrError.getValue();
            return res.status(201).json(pathDTO);
        }catch (e) {
            return next(e);
        }
    };

     public async getPathByPathId(req: Request, res: Response, next: NextFunction){
        try {
            const pathOrError = await this.pathServiceInstance.getPathByPathId(parseInt(req.params.pathId.toString(), 10)) as Result<ISneakersDTO>;

            if (pathOrError.isFailure) {
                return res.status(402).send();
            }

            const pathDTO = pathOrError.getValue();
            return res.status(201).json(pathDTO);
        }catch (e) {
            return next(e);
        } 
    }; 
}