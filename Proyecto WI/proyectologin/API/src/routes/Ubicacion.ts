import { Router } from "express";
import UbicacionController from "../controller/UbicacionController";

const routes = Router();

routes.get("", UbicacionController.getAll);
//Para que determine que es paracmetro, ponemos los dos :
routes.get("/getById/:id", UbicacionController.getById);
//Para poder agregar un dato a la base de datos, desde el postman
routes.post("", UbicacionController.add);

routes.patch("/getById/:id", UbicacionController.update);

routes.delete("/getById/:id", UbicacionController.delete);

export default routes;