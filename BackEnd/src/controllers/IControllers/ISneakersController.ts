import { Request, Response, NextFunction } from 'express';

export default interface ISneakersController  {
  createSneakers(req: Request, res: Response, next: NextFunction);
  updateSneakers(req: Request, res: Response, next: NextFunction);
  getAllSneakers(req: Request, res: Response, next: NextFunction);
  getSneakersByName(req: Request, res: Response, next: NextFunction);
  getSneakersByCondition(req: Request, res: Response, next: NextFunction);
  getSneakersBySize(req: Request, res: Response, next: NextFunction);
}