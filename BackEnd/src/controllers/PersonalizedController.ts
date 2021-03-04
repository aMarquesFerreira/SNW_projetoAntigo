import { NextFunction, Request, Response } from "express";
import { Inject } from "typedi";
import config from "../../config";
import { Result } from "../core/logic/Result";
import { IPersonalizedDTO } from "../dto/IPersonalizedDTO";
import IPersonalizedService from "../services/IServices/IPersonalizedService";
import IPersonalizedController from "./IControllers/IPersonalizedController";

export default class PersonalizedController implements IPersonalizedController {
    constructor(
        @Inject(config.services.personalized.name) private personalizedServiceInstance: IPersonalizedService,
    ) { }

    public async createPersonalized(req: Request, res: Response, next: NextFunction){
        try {
            const personalizedOrError = await this.personalizedServiceInstance.createPersonalized(req.body as IPersonalizedDTO) as Result<IPersonalizedDTO>;

            if (personalizedOrError.isFailure) {
                return res.status(402).send();
            }

            const personalizedDTO = personalizedOrError.getValue();
            return res.status(201).json(personalizedDTO);
        }catch (e) {
            return next(e);
        }
    };

    public async updatePersonalized(req: Request, res: Response, next: NextFunction){
        throw new Error("Method not implemented.");
    };

    public async getAllPersonalized(req: Request, res: Response, next: NextFunction){
        try {
            const personalizedOrError = await this.personalizedServiceInstance.getAllPersonalized() as Result<IPersonalizedDTO[]>;

            if (personalizedOrError.isFailure) {
                return res.status(402).send();
            }

            const personalizedDTO = personalizedOrError.getValue();
            return res.status(201).json(personalizedDTO);
        }catch (e) {
            return next(e);
        }
    };

     public async getPersonalizedByName(req: Request, res: Response, next: NextFunction){
        try {
            const personalizedOrError = await this.personalizedServiceInstance.getPersonalizedByName(req.params.name.toString()) as Result<IPersonalizedDTO>;

            if (personalizedOrError.isFailure) {
                return res.status(402).send();
            }

            const personalizedDTO = personalizedOrError.getValue();
            return res.status(201).json(personalizedDTO);
        }catch (e) {
            return next(e);
        } 
    }; 

    public async getPersonalizedByAuthor(req: Request, res: Response, next: NextFunction){
        try {
            const personalizedOrError = await this.personalizedServiceInstance.getPersonalizedByAuthor(req.params.author.toString()) as Result<IPersonalizedDTO>;

            if (personalizedOrError.isFailure) {
                return res.status(402).send();
            }

            const personalizedDTO = personalizedOrError.getValue();
            return res.status(201).json(personalizedDTO);
        }catch (e) {
            return next(e);
        } 
    }; 

    public async getPersonalizedBySize(req: Request, res: Response, next: NextFunction){
        try {
            let parametro : Number = +(req.params.size);
            const personalizedOrError = await this.personalizedServiceInstance.getPersonalizedBySize(parametro) as Result<IPersonalizedDTO>;

            if (personalizedOrError.isFailure) {
                return res.status(402).send();
            }

            const personalizedDTO = personalizedOrError.getValue();
            return res.status(201).json(personalizedDTO);
        }catch (e) {
            return next(e);
        } 
    }; 
}