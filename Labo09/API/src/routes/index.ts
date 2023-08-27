import { Router } from 'express';
import producto from './productos';
import auth from './auth';
import usuarios from './usuarios';
import factura from './factura';
import categorias from './categorias';
import cursos from './cursos';
import estudiantes from './estudiantes';

const routes = Router();

routes.use('/productos', producto);
routes.use('/auth', auth);
routes.use('/usuarios', usuarios);
routes.use('/factura', factura);
routes.use('/categorias', categorias);
routes.use('/estudiantes', estudiantes);
routes.use('/cursos', cursos);

export default routes;
