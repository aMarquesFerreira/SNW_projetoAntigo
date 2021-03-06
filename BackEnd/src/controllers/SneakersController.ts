import { NextFunction, Request, Response } from "express";
import { Inject } from "typedi";
import config from "../../config";
import { Result } from "../core/logic/Result";
import { ISneakersDTO } from "../dto/ISneakersDTO";
import ISneakersService from "../services/IServices/ISneakersService";
import ISneakersController from "./IControllers/ISneakersController";

export default class SneakersController implements ISneakersController {
    constructor(
        @Inject(config.services.sneakers.name) private sneakersServiceInstance: ISneakersService,
    ) { }

    public async createSneakers(req: Request, res: Response, next: NextFunction){
        try {
            const sneakersOrError = await this.sneakersServiceInstance.createSneakers(req.body as ISneakersDTO) as Result<ISneakersDTO>;

            if (sneakersOrError.isFailure) {
                return res.status(402).send();
            }

            const sneakersDTO = sneakersOrError.getValue();
            return res.status(201).json(sneakersDTO);
        }catch (e) {
            return next(e);
        }
    };

    public async updateSneakers(req: Request, res: Response, next: NextFunction){
        throw new Error("Method not implemented.");
    };

    public async getAllSneakers(req: Request, res: Response, next: NextFunction){
        try {
            const sneakersOrError = await this.sneakersServiceInstance.getAllSneakers() as Result<ISneakersDTO[]>;

            if (sneakersOrError.isFailure) {
                return res.status(402).send();
            }

            const sneakersDTO = sneakersOrError.getValue();
            return res.status(201).json(sneakersDTO);
        }catch (e) {
            return next(e);
        }
    };

     public async getSneakersByName(req: Request, res: Response, next: NextFunction){
        try {
            const sneakersOrError = await this.sneakersServiceInstance.getSneakersByName(req.params.name.toString()) as Result<ISneakersDTO>;

            if (sneakersOrError.isFailure) {
                return res.status(402).send();
            }

            const sneakersDTO = sneakersOrError.getValue();
            return res.status(201).json(sneakersDTO);
        }catch (e) {
            return next(e);
        } 
    }; 

    public async getSneakersByCondition(req: Request, res: Response, next: NextFunction){
        try {
            
            let parametro : Number = +(req.params.condition);
            const sneakersOrError = await this.sneakersServiceInstance.getSneakersByCondition(parametro) as Result<ISneakersDTO>;

            if (sneakersOrError.isFailure) {
                return res.status(402).send();
            }

            const sneakersDTO = sneakersOrError.getValue();
            return res.status(201).json(sneakersDTO);
        }catch (e) {
            return next(e);
        } 
    }; 

    public async getSneakersBySize(req: Request, res: Response, next: NextFunction){
        try {

            let parametro : Number = +(req.params.size);
            const sneakersOrError = await this.sneakersServiceInstance.getSneakersBySize(parametro) as Result<ISneakersDTO>;

            if (sneakersOrError.isFailure) {
                return res.status(402).send();
            }

            const sneakersDTO = sneakersOrError.getValue();
            return res.status(201).json(sneakersDTO);
        }catch (e) {
            return next(e);
        } 
    }; 
}