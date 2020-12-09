// import { Request, Response, NextFunction } from 'express';
// import { Inject } from 'typedi';
// import config from "../../config";
// import ITravelLineController from "./IControllers/ITravelLineController";
// import ITravelLineService from '../services/IServices/ITravelLineService';
// import { ITravelLineDTO } from '../dto/ITravelLineDTO';
// import { Result } from "../core/logic/Result";

// export default class TravelLineController implements ITravelLineController /* TODO: extends ../core/infra/BaseController */ {
//   constructor(
//     @Inject(config.services.travelLine.name) private TravelLineServiceInstance: ITravelLineService,
//   ) { }

//   public async createTravelLine(req: Request, res: Response, next: NextFunction) {
//     try {
//       const lineOrError = await this.TravelLineServiceInstance.createTravelLine(req.body as ITravelLineDTO) as Result<ITravelLineDTO>;

//       if (lineOrError.isFailure) {
//         return res.status(402).send();
//       }

//       const lineDTO = lineOrError.getValue();
//       return res.status(201).json(lineDTO);
//     }
//     catch (e) {
//       return next(e.body);
//     }
//   };

//   public async getAllLines(req: Request, res: Response, next: NextFunction) {
//     try {
//       const lineListOrError = await this.TravelLineServiceInstance.getAllLines() as Result<ITravelLineDTO[]>;

//       if (lineListOrError.isFailure) {
//         return res.status(402).send();
//       }

//       const linesDTO = lineListOrError.getValue();
//       return res.status(200).json(linesDTO);
//     }
//     catch (e) {
//       return next(e);
//     }
//   };

//   public async getLinesByCodeSearch(req: Request, res: Response, next: NextFunction) {
//     try {
//       const lineListOrError = await this.TravelLineServiceInstance.getLinesByCodeSearch(req.query.code.toString()) as Result<ITravelLineDTO[]>;

//       if (lineListOrError.isFailure) {
//         return res.status(402).send();
//       }

//       const linesDTO = lineListOrError.getValue();
//       if (linesDTO.length != 0) {
//         return res.status(200).json(linesDTO);
//       }
//       return res.json("Not Found");
//     }
//     catch (e) {
//       return next(e);
//     }
//   }
// }