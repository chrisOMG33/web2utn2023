import { Router } from "express";
import SolicitarCitaController from "../controller/SolicitarCitaController";

const routes = Router();

routes.get("", SolicitarCitaController.getAll);
//Para que determine que es paracmetro, ponemos los dos :
routes.get("/getById/:id", SolicitarCitaController.getById);
//Para poder agregar un dato a la base de datos, desde el postman
routes.post("", SolicitarCitaController.add);

routes.patch("/getById/:id", SolicitarCitaController.update);

routes.delete("/getById/:id", SolicitarCitaController.delete);

export default routes;