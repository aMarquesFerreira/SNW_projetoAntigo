import { celebrate } from "celebrate";
import { Router } from "express";
import Joi from "joi";
import Container from "typedi";
import config from "../../../config";
import IPathController from "../../controllers/IControllers/IPathController";

const route = Router();

export default (app: Router) => {
    app.use('/paths', route);

    const pathController = Container.get(config.controller.path.name) as IPathController;

    route.post('', 
        celebrate({
            body: Joi.object({
                pathId: Joi.number().required(),
                isEmpty: Joi.boolean().required(),
                segments: Joi.array().items({ 
                                initialNode: Joi.required(),
                                finalNode: Joi.required(), 
                                duration: Joi.number().min(0).required(),
                                distance: Joi.number().min(0).required(),      
                }).required(), 
            })
        }),
        (req, res, next) => pathController.createPath(req, res, next)
    );

    route.get('', (req, res, next) => pathController.getAllPaths(req, res, next));

    route.get('/:pathId', (req, res, next) => pathController.getPathByPathId(req, res, next));
}