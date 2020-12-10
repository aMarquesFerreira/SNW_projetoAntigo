import { celebrate } from "celebrate";
import { Router } from "express";
import Joi from "joi";
import Container from "typedi";
import config from "../../../config";
import ISneakersController from "../../controllers/IControllers/ISneakersController";

const route = Router();

export default (app: Router) => {
    app.use('/sneakers', route);

    const sneakersController = Container.get(config.controller.sneakers.name) as ISneakersController;

    route.post('', 
        celebrate({
            body: Joi.object({
                name: Joi.string().required().alphanum().min(1).error(new Error('Name is missing')),
                size: Joi.number().required().positive().error(new Error('Size is missing')),
                condition: Joi.number().required().positive().max(10).error(new Error('Condition is missing')),
            })
        }),
        (req, res, next) => sneakersController.createSneakers(req, res, next)
    );

    route.get('', (req, res, next) => sneakersController.getAllSneakers(req, res, next));

    route.get('/:code', (req, res, next) => sneakersController.getSneakersByName(req, res, next));
}