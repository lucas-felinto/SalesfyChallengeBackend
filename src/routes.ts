import * as express from "express";
import translateController from "./controllers/translateController";

const routes = express.Router();

routes.get("/", translateController.translate);

export default routes;
