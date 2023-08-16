import { Router } from "express";
import RecordAcademicoEstController from "../controller/RecordAcademicoEstController";

const routes = Router();

routes.get("", RecordAcademicoEstController.getAll);
//Para que determine que es paracmetro, ponemos los dos :
routes.get("/getById/:id", RecordAcademicoEstController.getById);
//Para poder agregar un dato a la base de datos, desde el postman
routes.post("", RecordAcademicoEstController.add);

routes.patch("/getById/:id", RecordAcademicoEstController.update);

routes.delete("/getById/:id", RecordAcademicoEstController.delete);

export default routes;