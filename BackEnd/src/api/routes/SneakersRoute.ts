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
                size: Joi.array().items({
                    size: Joi.string().required(),
                }).required(),
                condition: Joi.array().items({
                    condition: Joi.string().required(),
                }).required(),
            })
        }),
        (req, res, next) => sneakersController.createSneakers(req, res, next)
    );

    route.get('', (req, res, next) => sneakersController.getAllSneakers(req, res, next));

    route.get('/:code', (req, res, next) => sneakersController.getSneakersByName(req, res, next));
}