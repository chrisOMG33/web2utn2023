import { Router } from "express";
import producto from "./productos";
import usuario from "./usuario";
import factura from "./factura";

const routes = Router();

routes.use("/Productos", producto);
routes.use("/Usuario", usuario);
routes.use("/Factura", factura);

export default routes;
