import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { Persona } from '../entity/persona';
import { InicioSesion } from '../entity/inicioSesion';
import { validate } from 'class-validator';
import { FindOneOptions } from 'typeorm'; // Agregar esta importación

class PersonasController {
  static getAll = async (req: Request, resp: Response) => {
    try {
      const personasRepo = AppDataSource.getRepository(Persona);
      const listaPersonas = await personasRepo.find({
        where: { Estado: true },
      });
      if (listaPersonas.length == 0) {
        return resp.status(404).json({ mensaje: 'No se encontró resultados.' });
      }
      return resp.status(200).json(listaPersonas);
    } catch (error) {
      return resp.status(400).json({ mensaje: error });
    }
  };

  static getById = async (req: Request, resp: Response) => {
    const { id } = req.params;
    const idPersona = parseInt(id);

    try {
      const personasRepo = AppDataSource.getRepository(Persona);

      const options: FindOneOptions<Persona> = {
        where: {
          IdPersona: idPersona,
        },
      };

      const persona = await personasRepo.findOne(options);

      if (!persona) {
        return resp.status(404).json({ mensaje: 'Persona no encontrada.' });
      }

      return resp.status(200).json(persona);
    } catch (error) {
      return resp.status(400).json({ mensaje: 'Error al obtener la persona.' });
    }
  };

  static add = async (req: Request, resp: Response) => {
    try {
      const {
        IdPersona,
        Nombre,
        apellido1,
        apellido2,
        Genero,
        FechaNacimiento,
        Rol,
        Clave,
      } = req.body;

      let persona = new Persona();
      persona.Identificacion = IdPersona;
      persona.IdPersona = IdPersona;
      persona.Nombre = Nombre;
      persona.Apellido1 = apellido1;
      persona.Apellido2 = apellido2;
      persona.Genero = Genero;
      persona.FechaNacimiento = FechaNacimiento;
      persona.Estado = true;

      let Inicio = new InicioSesion();
      Inicio.IdPersona = IdPersona;
      Inicio.Rol = Rol;
      Inicio.Clave = Clave;

      // reglas de negocio
      // valiando que el usuario o haya sido creado anteriormente
      const repoPersona = AppDataSource.getRepository(Persona);
      const repoIncio = AppDataSource.getRepository(InicioSesion);
      let PersonaExist = await repoPersona.findOne({
        where: { Identificacion: IdPersona },
      });
      if (PersonaExist) {
        resp.status(400).json({ mensaje: 'La Persona ya existe' });
      }

      Inicio.hashPassword();

      try {
        await repoPersona.save(persona);
        await repoIncio.save(Inicio);
        return resp.status(201).json({ mensaje: 'Se ha creado el usuario' });
      } catch (error) {
        resp.status(400).json(error);
      }
    } catch (error) {
      resp.status(400).json({ mensaje: 'Error desconocido.' });
    }
  };

  static update = async (req: Request, resp: Response) => {};
  static delete = async (req: Request, resp: Response) => {};
}

export default PersonasController;
