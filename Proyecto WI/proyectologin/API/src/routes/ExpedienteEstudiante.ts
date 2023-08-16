import { Router } from "express";
import ExpedienteEstudianteController from "../controller/ExpedienteEstudianteController";



const routes = Router();

routes.get("", ExpedienteEstudianteController.getAll);
//Para que determine que es paracmetro, ponemos los dos :
routes.get("/getById/:id", ExpedienteEstudianteController.getById);
//Para poder agregar un dato a la base de datos, desde el postman
routes.post("", ExpedienteEstudianteController.add);

routes.patch("/getById/:id", ExpedienteEstudianteController.update);

routes.delete("/getById/:id", ExpedienteEstudianteController.delete);

export default routes;
