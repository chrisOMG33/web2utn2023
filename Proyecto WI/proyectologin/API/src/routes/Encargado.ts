import { Router } from "express";
import EncargadoController from "../controller/EncargadoController";

const routes = Router();

routes.get("", EncargadoController.getAll);
//Para que determine que es paracmetro, ponemos los dos :
routes.get("/getById/:id", EncargadoController.getById);
//Para poder agregar un dato a la base de datos, desde el postman
routes.post("", EncargadoController.add);

routes.patch("/getById/:id", EncargadoController.update);

routes.delete("/getById/:id", EncargadoController.delete);

export default routes;