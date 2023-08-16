import { Router } from "express";
import CitasController from "../controller/CitasController";

const routes = Router();

routes.get("", CitasController.getAll);
//Para que determine que es paracmetro, ponemos los dos :
routes.get("/getById/:id", CitasController.getById);
//Para poder agregar un dato a la base de datos, desde el postman
routes.post("", CitasController.add);

routes.patch("/getById/:id", CitasController.update);

routes.delete("/getById/:id", CitasController.delete);

export default routes;