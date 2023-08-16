import { Router } from "express";
import BitacoraDocenteController from "../controller/BitacoraDocenteController";



const routes = Router();

routes.get("", BitacoraDocenteController.getAll);
//Para que determine que es paracmetro, ponemos los dos :
routes.get("/getById/:id", BitacoraDocenteController.getById);
//Para poder agregar un dato a la base de datos, desde el postman
routes.post("", BitacoraDocenteController.add);

routes.patch("/getById/:id", BitacoraDocenteController.update);

routes.delete("/getById/:id", BitacoraDocenteController.delete);

export default routes;