import { NextFunction, Request, Response } from "express";
import { Inject } from "typedi";
import config from "../../config";
import IDriverTypeService from "../services/IServices/IDriverTypeService";
import IImporterService from "../services/IServices/IImporterService";
import IImporterController from "./IControllers/IImporterController";

export default class ImporterController implements IImporterController {
    constructor(
        @Inject(config.services.import.name) private importerServiceInstance: IImporterService,
    ) { }

    public async importData(req: Request, res: Response, next: NextFunction) {
        try {
            await this.importerServiceInstance.importData(req.body as { filePath: string; }, res, next);
        }catch (e) {
            return next(e);
        }
    };

}