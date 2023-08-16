import { Router } from "express";
import ServiciosController from "../controller/ServiciosController";

const routes = Router();

routes.get("", ServiciosController.getAll);
//Para que determine que es paracmetro, ponemos los dos :
routes.get("/getById/:id", ServiciosController.getById);
//Para poder agregar un dato a la base de datos, desde el postman
routes.post("", ServiciosController.add);

routes.patch("/getById/:id", ServiciosController.update);

routes.delete("/getById/:id", ServiciosController.delete);

export default routes;