import { Application } from "express";

/* GET home page. */
export function loadRoutes(app: Application){

  app.use('/api/demo', require('./demoRoutes'))

}

