import { Router } from 'express';
import CursoController from '../controller/CursoController';

const routes = Router();

routes.get('', CursoController.getAll);

export default routes;
