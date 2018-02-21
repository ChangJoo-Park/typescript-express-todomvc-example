import "reflect-metadata";
import { createConnection, Connection } from "typeorm";
import { Request, Response } from "express";
import * as express from "express";
import * as bodyParser from "body-parser";
import { AppRoutes } from "./routes";

// create connection with database
// note that it's not active database connection
// TypeORM creates connection pools and uses them for your requests
const initialize = async (): Promise<any> => {
  const connection: Connection = await createConnection();
  // create express app
  const app = express()
  app.use(bodyParser.json())

  // register all application routes
  AppRoutes.forEach(route => {
    app[route.method](
      route.path,
      async (request: Request, response: Response, next: Function) => {
        try {
          await route.action(request, response);
          next();
        } catch (error) {
          next(error);
        }
      }
    )
  })

  // run app
  app.listen(3000)

  console.log("Express application is up and running on port 3000");
  return app
};

initialize();
