import { Router } from 'express';
import { celebrate, Joi } from 'celebrate';
import { Container } from 'typedi';
import config from "../../../config";
import ITravelLineController from '../../controllers/IControllers/ITravelLineController';

const route = Router();

export default (app: Router) => {
    app.use('/lines', route);

    const travelLineController = Container.get(config.controller.travelLine.name) as ITravelLineController;

    route.post('',
        celebrate({
            body: Joi.object({
                code: Joi.string().required().alphanum().min(1),
                name: Joi.string().required().max(200),
                color: Joi.string().required().max(200),
                terminalNode1: Joi.string().required().max(20),
                terminalNode2: Joi.string().required().max(20),
                linePaths: Joi.array().items({
                    pathId: Joi.number().required(),
                    orientation: Joi.string().required().valid("go","return", "empty", "backup"),
                }).required(),
            })
        }),
        (req, res, next) => {
            console.log("TRAVEL LINE ROUTE")
            travelLineController.createTravelLine(req, res, next)}
            );

        route.get('', (req, res, next) => travelLineController.getAllLines(req, res, next));

        route.get('/search', (req, res, next) => travelLineController.getLinesByCodeSearch(req, res, next));

    }