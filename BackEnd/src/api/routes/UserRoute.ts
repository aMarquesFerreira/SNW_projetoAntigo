import { celebrate, Joi} from 'celebrate';
import { Router } from 'express';
import { Container } from 'typedi';
import config from '../../../config';
import IUserController from '../../controllers/IControllers/IUserController';

const route = Router();

export default (app: Router) => {
    app.use('/users', route);

    const userController = Container.get(config.controller.user.name) as IUserController;
    
    route.post('',
        celebrate({
            body: Joi.object({
                name: Joi.string().required().min(1).error(new Error('Name is missing')),
                email: Joi.string().required().alphanum().min(1).error(new Error('Email is missing')),
                age: Joi.number().required().positive().error(new Error('Age is missing')),
                size: Joi.number().required().positive().error(new Error('Size is missing')),
                address: Joi.string().required().min(3).error(new Error('Address is missing')),
                postalCode: Joi.string().required().alphanum().min(1).error(new Error('Postal Code is missing')),
                password: Joi.string().required().min(4).error(new Error('Password is missing or too short')),

            })
        }),
        (req, res, next) => userController.createUser(req, res, next)
    );

    route.get('', (req, res, next) => userController.getAllUsers(req, res, next));

    route.get('/:email', (req, res, next) => userController.getUserByEmail(req, res, next));
}
