import { Request, Response, NextFunction } from 'express';

export default interface IPathController  {
  createPath(req: Request, res: Response, next: NextFunction);
  updatePath(req: Request, res: Response, next: NextFunction);
  getAllPaths(req: Request, res: Response, next: NextFunction);
  getPathByPathId(req: Request, res: Response, next: NextFunction);
}