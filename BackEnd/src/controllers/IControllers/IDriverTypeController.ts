import { NextFunction, Request, Response } from "express";

export default interface IDriverTypeController {
    createDriverType(req: Request, res: Response, next: NextFunction);
    updateDriverType(req: Request, res: Response, next: NextFunction);
    getAllDriverTypes(req: Request, res: Response, next: NextFunction);
    getDriverTypeByCode(req: Request, res: Response, next: NextFunction);
}