import { Router } from "express";
import InicioSesionController from "../controller/InicioSesionController";

const routes = Router();

routes.get("", InicioSesionController.getAll);
//Para que determine que es paracmetro, ponemos los dos :
routes.get(":id", InicioSesionController.getById);
//Para poder agregar un dato a la base de datos, desde el postman
routes.post("", InicioSesionController.add);

routes.patch(":id", InicioSesionController.update);

routes.delete(":id", InicioSesionController.delete);

export default routes;