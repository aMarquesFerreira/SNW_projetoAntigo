import { NextFunction, Request, Response } from "express";

export default interface IImporterController {
    importData(req: Request, res: Response, next: NextFunction);
}