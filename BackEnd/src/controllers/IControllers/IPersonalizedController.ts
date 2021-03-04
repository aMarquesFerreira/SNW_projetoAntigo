import { Request, Response, NextFunction } from 'express';

export default interface IPersonalizedController  {
  createPersonalized(req: Request, res: Response, next: NextFunction);
  updatePersonalized(req: Request, res: Response, next: NextFunction);
  getAllPersonalized(req: Request, res: Response, next: NextFunction);
  getPersonalizedByName(req: Request, res: Response, next: NextFunction);
  getPersonalizedByAuthor(req: Request, res: Response, next: NextFunction);
  getPersonalizedBySize(req: Request, res: Response, next: NextFunction);
}