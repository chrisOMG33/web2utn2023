import { Router } from "express";
import VendedorController from "../controller/VendedorController";

const routes= Router();

routes.get('', VendedorController.getAll);
routes.get('/getBycodigo_vendedor/:codigo_vendedor', VendedorController.getBycodigo_vendedor);
routes.post('',VendedorController.getAll);
export default routes;