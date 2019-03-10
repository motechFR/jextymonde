import * as express from 'express';

import { loadRoutes } from './src/routes/routeIndex';

import cookieParser = require('cookie-parser');
import * as cors from 'cors';
import corsF = require('cors');

// Used for the database connection
import { connectToDb } from './src/connectivity/mongoConnect';

// Set the cors options
const options: cors.CorsOptions = {
    credentials : true,
    origin: '*',
    exposedHeaders: 'Set-Cookie'
}

export const app = express
    .default()
    .use(corsF(options))
    .options('*', corsF(options))
    .use(cookieParser())

    loadRoutes(app);




connectToDb().then(() => {

    app.listen(process.env.PORT || 3000, () => {
        console.log(`Using Node version ${process.version}`)
        console.log("Application operational");
        console.log(process.env.PORT);           

        // Application is now operational


    });
    
})




