import { Licencias } from './licencias';

export interface Chofer {
  cedula: string;
  nombre: string;
  apellido1: string;
  apellido2: string;
  fechaNac: Date;
  estado: boolean;
  licencia: Licencias;
}
