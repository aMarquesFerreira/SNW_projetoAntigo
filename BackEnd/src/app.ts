import 'reflect-metadata'; // We need this in order to use @Decorators

import config from '../config';
import express from 'express';
import loaders from './loaders';
import Logger from './loaders/logger';

async function startServer() {
    Logger.info("Starting Master Data Rede");
    const app = express();

    await loaders({expressApp: app});

    let server = app.listen(config.port);
    server.on('error', onError);
    server.on('listening', onListening);

    function onError(error) {
        Logger.error(`MDR: ${error}`);
        process.exit(1);
    }

    function onListening() {
        Logger.info(`################################################
        🛡️  Server listening on port: ${config.port} 🛡️ 
        ################################################`);
    }
}

startServer();