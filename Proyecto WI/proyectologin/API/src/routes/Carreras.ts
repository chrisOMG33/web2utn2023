import { Router } from "express";

import CarrerasController from "../controller/CarrerasController";

const routes = Router();

routes.get("", CarrerasController.getAll);
//Para que determine que es paracmetro, ponemos los dos :
routes.get("/getById/:id", CarrerasController.getById);
//Para poder agregar un dato a la base de datos, desde el postman
routes.post("", CarrerasController.add);

routes.patch("/getById/:id", CarrerasController.update);

routes.delete("/getById/:id", CarrerasController.delete);

export default routes;