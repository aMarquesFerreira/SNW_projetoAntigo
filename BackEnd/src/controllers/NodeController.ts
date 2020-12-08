import { Request, Response, NextFunction } from 'express';
import { Inject } from 'typedi';
import config from "../../config";

import INodeController from "./IControllers/INodeController";
import INodeService from '../services/IServices/INodeService';
import { INodeDTO } from '../dto/INodeDTO';

import { Result } from "../core/logic/Result";

export default class NodeController implements INodeController /* TODO: extends ../core/infra/BaseController */ {
  constructor(
    @Inject(config.services.node.name) private nodeServiceInstance: INodeService,
  ) { }

  public async createNode(req: Request, res: Response, next: NextFunction) {
    try {
      const nodeOrError = await this.nodeServiceInstance.createNode(req.body as INodeDTO) as Result<INodeDTO>;

      if (nodeOrError.isFailure) {
        return res.status(402).send();
      }

      const nodeDTO = nodeOrError.getValue();
      return res.status(201).json(nodeDTO);
    }
    catch (e) {
      return next(e);
    }
  };

  public async getAllNodes(req: Request, res: Response, next: NextFunction) {
    try {
      const nodeListOrError = await this.nodeServiceInstance.getAllNodes() as Result<INodeDTO[]>;

      if (nodeListOrError.isFailure) {
        return res.status(402).send();
      }

      const nodesDTO = nodeListOrError.getValue();
      return res.status(200).json(nodesDTO);
    }
    catch (e) {
      return next(e);
    }
  };

  public async getNodeByShortName(req: Request, res: Response, next: NextFunction) {
    try {

      const nodeOrError = await this.nodeServiceInstance.getNodeByShortName(req.params.shortName) as Result<INodeDTO>;

      if (nodeOrError.isFailure) {
        return res.status(402).send();
      }

      const nodeDTO = nodeOrError.getValue();
      return res.status(200).json(nodeDTO);
    }
    catch (e) {
      return res.status(200).json("Not Found");
    }
  };

  public async getNodesByShortNameSearch(req: Request, res: Response, next: NextFunction) {
    try {
      const nodeListOrError = await this.nodeServiceInstance.getNodesByShortNameSearch(req.query.shortName.toString()) as Result<INodeDTO[]>;

      if (nodeListOrError.isFailure) {
        return res.status(402).send();
      }

      const nodesDTO = nodeListOrError.getValue();
      if (nodesDTO.length != 0) {
        return res.status(200).json(nodesDTO);
      }
      return res.status(404).json("Not Found");
    }
    catch (e) {
      return next(e);
    }
  }

  public async getAllNodesOrderByShortName(req: Request, res: Response, next: NextFunction) {
    try {
      const nodeListOrError = await this.nodeServiceInstance.getAllNodesOrderByShortName() as Result<INodeDTO[]>;

      if (nodeListOrError.isFailure) {
        return res.status(402).send();
      }

      const nodesDTO = nodeListOrError.getValue();
      return res.status(200).json(nodesDTO);
    }
    catch (e) {
      return next(e);
    }
  };
}