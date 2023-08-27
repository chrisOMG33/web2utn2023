import { Curso } from './curso';

export interface Estudiantes {
  id: number;
  nombre: string;
  apellido1: string;
  apellido2: string;
  direccion: string;
  estado: boolean;
  cursos: Curso;
}
