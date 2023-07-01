import { Router } from "express";
import FacturaController from "../controller/FacturaController";

const routes = Router();

routes.get("", FacturaController.getAll);
routes.get("/getById/:idFactura", FacturaController.getById);
routes.delete("/getById/:idFactura", FacturaController.delete);

export default routes;
