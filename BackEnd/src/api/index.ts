import { Router } from 'express';
import driverType from './routes/DriverTypeRoute';
import node from './routes/NodeRoute';
import vehicleType from './routes/VehicleTypeRoute';
import path from './routes/PathRoute';
import travelLine from './routes/TravelLineRoute';
import importer from './routes/ImporterRoute';

export default () => {
	const app = Router();

	node(app);
	driverType(app);
	vehicleType(app);
	path(app);
	travelLine(app);
	importer(app);
	
	return app
}