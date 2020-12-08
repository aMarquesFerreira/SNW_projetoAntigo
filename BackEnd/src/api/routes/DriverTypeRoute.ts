import { celebrate, Joi} from 'celebrate';
import { Router } from 'express';
import { Container } from 'typedi';
import config from '../../../config';
import IDriverTypeController from '../../controllers/IControllers/IDriverTypeController';

const route = Router();

export default (app: Router) => {
    app.use('/driverTypes', route);

    const driverTypeController = Container.get(config.controller.driverType.name) as IDriverTypeController;
    
    route.post('',
        celebrate({
            body: Joi.object({
                name: Joi.object({ name: Joi.string().required()}),
                code: Joi.object({ code: Joi.string().required().max(20)}),
                description: Joi.object({ description: Joi.string().required().max(250)}),
            })
        }),
        (req, res, next) => driverTypeController.createDriverType(req, res, next)
    );

    route.get('', (req, res, next) => driverTypeController.getAllDriverTypes(req, res, next));

    route.get('/:code', (req, res, next) => driverTypeController.getDriverTypeByCode(req, res, next));
}
