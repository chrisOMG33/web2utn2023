import { Router } from "express";
import producto from "./productos"
import cliente from "./clientes"
import proveedor from "./proveedor"
import vendedor from "./vendedor";
import CabeceraFactura from "./cabecera";


const routes= Router();

routes.use('/Productos',producto);
routes.use('/Clientes',cliente);
routes.use('/Proveedor',proveedor);
routes.use('/Vendedor',vendedor);

export default routes;