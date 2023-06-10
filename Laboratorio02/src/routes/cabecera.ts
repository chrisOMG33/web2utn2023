import { Router } from "express";
import CabeceraFacturaController from "../controller/CabeceraFacturaController";

const routes= Router();

routes.get('', CabeceraFacturaController.getAll);

export default routes;