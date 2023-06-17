import { Router } from "express";
import producto from "./productos";
import usuario from "./usuarios";

const routes = Router();

routes.use("/Productos", producto);
routes.use("/Usuarios", usuario);

export default routes;
