import { Router } from "express";
import ClienteController from "../controller/ClienteController";

const routes= Router();

routes.get('', ClienteController.getAll);
routes.get('/getByRuc/:Ruc', ClienteController.getByRuc);
routes.post('',ClienteController.getAll);

export default routes;