import { Router } from "express";
import BoletaMatriculaController from "../controller/BoletaMatriculaController";

const routes = Router();

routes.get("", BoletaMatriculaController.getAll);
//Para que determine que es paracmetro, ponemos los dos :
routes.get("/getById/:id", BoletaMatriculaController.getById);
//Para poder agregar un dato a la base de datos, desde el postman
routes.post("", BoletaMatriculaController.add);

routes.patch("/getById/:id", BoletaMatriculaController.update);

routes.delete("/getById/:id", BoletaMatriculaController.delete);

export default routes;