import { Router, Request, Response, json } from 'express';
import { celebrate, Joi } from 'celebrate';
import { Container } from 'typedi';
import config from "../../../config";
import INodeController from '../../controllers/IControllers/INodeController';

const route = Router();

export default (app: Router) => {
    app.use('/nodes', route);

    const nodeController = Container.get(config.controller.node.name) as INodeController;

    route.post('',
        celebrate({
            body: Joi.object({
                fullName: Joi.string().required().max(200).error(new Error('Full Name is missing')),
                coordinates: Joi.object({
                    latitude: Joi.number().required().min(-90.0).max(90.0).precision(15).error(new Error('Latitude is missing')),
                    longitude: Joi.number().required().min(-180.0).max(180.0).precision(15).error(new Error('Longitude is missing')),
                }).error(new Error('Coordinates are missing')),
                shortName: Joi.string().required().max(20).error(new Error('Short Name is missing')),
                isDepot: Joi.boolean().required().error(new Error('Information about if the node is depot is missing')),
                isReliefPoint: Joi.boolean().required().error(new Error('Information about if the node is relief point is missing')),
                crewTravelTime: Joi.object({
                    duration: Joi.number().error(new Error('Duration is missing')),
                }).optional()
            })
        }),
        (req, res, next) => nodeController.createNode(req, res, next));

    route.get('', (req, res, next) => nodeController.getAllNodes(req, res, next));

    route.get('/search', (req, res, next) => nodeController.getNodesByShortNameSearch(req, res, next));

    route.get('/orderByShortName', (req, res, next) => nodeController.getAllNodesOrderByShortName(req, res, next));

    route.get('/:shortName', (req, res, next) => nodeController.getNodeByShortName(req, res, next));
 
}
