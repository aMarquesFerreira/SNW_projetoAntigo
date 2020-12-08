import { Router, Request, Response } from 'express';
import { celebrate, Joi } from 'celebrate';
import { Container } from 'typedi';
import config from "../../../config";
import IVehicleTypeController from '../../controllers/IControllers/IVehicleTypeController';

const route = Router();

export default (app: Router) => {
    app.use('/vehicleTypes', route);

    const vehicleTypeController = Container.get(config.controller.vehicleType.name) as IVehicleTypeController;

    route.post('',
        celebrate({
            body: Joi.object({
                vehicleId: Joi.string().required().alphanum().max(20),
                name: Joi.string().required().max(250),
                autonomy: Joi.number().required().integer().positive(),
                cost: Joi.number().required().min(0).positive(),
                averageSpeed: Joi.number().required().integer().positive(),
                energySource: {
                    fuelType: Joi.number().required().valid(1, 20, 23, 50, 75)
                },
                consumption: Joi.number().required().positive().precision(3),
                emissions: Joi.number().required().positive(),
            })
        }),
        (req, res, next) => vehicleTypeController.createVehicleType(req, res, next));

        route.get('', (req, res, next) => vehicleTypeController.getAllVehicleTypes(req, res, next));

        route.get('/:vehicleId', (req, res, next) => vehicleTypeController.getVehicleTypeByVehicleId(req, res, next));
}
