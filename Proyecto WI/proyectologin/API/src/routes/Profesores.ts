import { Router } from "express";
import ProfesoresController from "../controller/ProfesoresController";

const routes = Router();

routes.get("", ProfesoresController.getAll);
//Para que determine que es paracmetro, ponemos los dos :
routes.get("/getById/:id", ProfesoresController.getById);
//Para poder agregar un dato a la base de datos, desde el postman
routes.post("", ProfesoresController.add);

routes.patch("/getById/:id", ProfesoresController.update);

routes.delete("/getById/:id", ProfesoresController.delete);

export default routes;