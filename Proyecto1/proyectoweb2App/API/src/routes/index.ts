import { Router } from 'express';
import producto from './productos';
import auth from './auth';
import usuario from './usuarios';
import { checkjwt } from '../middleware/jwt';
import factura from './facturas';

const routes = Router();

routes.use('/Producto', producto);
routes.use('/Auth', auth);
routes.use('/Usuarios', usuario);
routes.use('/Factura', factura);

export default routes;
