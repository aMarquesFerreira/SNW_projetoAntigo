import { celebrate, Joi} from 'celebrate';
import { Router } from 'express';
import { Container } from 'typedi';
import config from '../../../config';
import IImporterController from '../../controllers/IControllers/IImporterController';

const route = Router();

export default (app: Router) => {
    app.use('/import', route);

    const importController = Container.get(config.controller.import.name) as IImporterController;
    
    route.post('', (req, res, next) => importController.importData(req, res, next));

}
