import { Router } from "express";
import ProveedorController from "../controller/ProveedorController";

const routes= Router();

routes.get('', ProveedorController.getAll);
routes.get('/getBycodigo_proveedor/:codigo_proveedor', ProveedorController.getBycodigo_proveedor);
routes.post('',ProveedorController.getAll);

export default routes;