import { Router } from "express";
import CuatrimestresController from "../controller/CuatrimestresController";

const routes = Router();

routes.get("", CuatrimestresController.getAll);
//Para que determine que es paracmetro, ponemos los dos :
routes.get("/getById/:id", CuatrimestresController.getById);
//Para poder agregar un dato a la base de datos, desde el postman
routes.post("", CuatrimestresController.add);

routes.patch("/getById/:id", CuatrimestresController.update);

routes.delete("/getById/:id", CuatrimestresController.delete);

export default routes;