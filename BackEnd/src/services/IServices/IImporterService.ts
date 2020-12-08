import { NextFunction, Response } from "express";

export default interface IImporterService {
    importData(filePath:  { filePath: string; }, res: Response, next: NextFunction);
}