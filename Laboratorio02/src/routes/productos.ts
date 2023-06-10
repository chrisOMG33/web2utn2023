import { Router } from "express";
import ProductosController from "../controller/ProductosController";

const routes= Router();

routes.get('', ProductosController.getAll);
routes.get('/getByCod/:codProducto', ProductosController.getByCod);
routes.post('',ProductosController.add);

export default routes;