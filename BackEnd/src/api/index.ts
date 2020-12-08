import { Router } from 'express';
import user from './routes/UserRoute';
import node from './routes/NodeRoute';
import vehicleType from './routes/VehicleTypeRoute';
import sneakers from './routes/SneakersRoute';
import travelLine from './routes/TravelLineRoute';
import importer from './routes/ImporterRoute';

export default () => {
	const app = Router();

	node(app);
	user(app);
	vehicleType(app);
	sneakers(app);
	travelLine(app);
	importer(app);
	
	return app
}