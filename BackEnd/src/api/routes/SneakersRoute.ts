import { celebrate, Segments, Joi } from "celebrate";
import { Router } from "express";
// import Joi from "joi";
import Container from "typedi";
import config from "../../../config";
import ISneakersController from "../../controllers/IControllers/ISneakersController";

const route = Router();

export default (app: Router) => {
    app.use('/sneakers', route);

    const sneakersController = Container.get(config.controller.sneakers.name) as ISneakersController;

    route.post('/',
        celebrate({
            [Segments.BODY]: {
                name: Joi.string().required().min(1),
                url: Joi.string().required().min(1),
            }
        }),
        (req, res, next) => sneakersController.createSneakers(req, res, next)
    );

    route.get('', (req, res, next) => sneakersController.getAllSneakers(req, res, next));

    route.get('/:name', (req, res, next) => sneakersController.getSneakersByName(req, res, next));
}