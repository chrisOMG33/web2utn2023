import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { ApoyoEstudiante } from './entity/apoyoEstudiante';
import { BitacoraDocente } from './entity/bitacoraDocente';
import { BoletaMatricula } from './entity/boletaMatricula';
import { Carrera } from './entity/carrera';
import { Cita } from './entity/cita';
import { Cuatrimestre } from './entity/cuatrimestre';
import { DatosSostenibilidadEstudiante } from './entity/datosSostenibilidadEstudiante';
import { Encargado } from './entity/encargado';
import { Estudiante } from './entity/estudiante';
import { EstudianteSalud } from './entity/estudianteSalud';
import { EvaluacionServicioEstudiantil } from './entity/evaluacionServicioEstudiantil';
import { InicioSesion } from './entity/inicioSesion';
import { Persona } from './entity/persona';
import { Profesor } from './entity/profesor';
import { RecordAcademico } from './entity/recordAcademicoEstudiantil';
import { SolicitarCita } from './entity/solicitarCita';
import { Ubicacion } from './entity/ubicacion';
import { Materias } from './entity/materia';
import { Servicios } from './entity/servicio';
import { AdecuacionCurricular } from './entity/adecuacionCurricular';
import { AjusteAcademico } from './entity/ajusteAcademico';
import { ExpedienteEstudiante } from './entity/ExpedienteEstudiante';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'proyecto_integrador',
  synchronize: true,
  logging: false,
  entities: [
    ApoyoEstudiante,
    BitacoraDocente,
    BoletaMatricula,
    Carrera,
    Cita,
    Cuatrimestre,
    DatosSostenibilidadEstudiante,
    Encargado,
    Estudiante,
    EstudianteSalud,
    EvaluacionServicioEstudiantil,
    InicioSesion,
    Materias,
    Persona,
    Profesor,
    RecordAcademico,
    Servicios,
    SolicitarCita,
    Ubicacion,
    AdecuacionCurricular,
    AjusteAcademico,
    ExpedienteEstudiante,
  ],
  migrations: [],
  subscribers: [],
});
