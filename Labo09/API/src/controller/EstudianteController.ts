import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { Producto } from '../entity/Producto';
import { validate } from 'class-validator';
import { CategoriaProducto } from '../entity/CategoriaProducto';
import { Estudiante } from '../entity/Estudiante';
import { Curso } from '../entity/Curso';

class EstudianteController {
  static getAll = async (req: Request, resp: Response) => {
    try {
      const estudianteRepo = AppDataSource.getRepository(Estudiante);

      const listaEstudiantes = await estudianteRepo.find({
        where: { estado: true },
        relations: { cursos: true },
      });

      if (listaEstudiantes.length == 0) {
        return resp.status(404).json({ mensaje: 'No se encontró resultados.' });
      }
      return resp.status(200).json(listaEstudiantes);
    } catch (error) {
      return resp.status(400).json({ mensaje: error });
    }
  };

  static getById = async (req: Request, resp: Response) => {
    try {
      const id = parseInt(req.params['id']);

      if (!id) {
        return resp.status(404).json({ mensaje: 'No se indica el ID' });
      }

      const estudianteRepo = AppDataSource.getRepository(Estudiante);

      let estudiante;
      try {
        estudiante = await estudianteRepo.findOneOrFail({
          where: { id, estado: true },
          relations: { cursos: true },
        });
      } catch (error) {
        return resp
          .status(404)
          .json({ mensaje: 'No se encontro un estudiante con ese ID' });
      }

      return resp.status(200).json(estudiante);
    } catch (error) {
      return resp.status(400).json({ mensaje: error });
    }
  };

  static add = async (req: Request, resp: Response) => {
    try {
      //DESTRUCTURING
      const { id, nombre, apellido1, apellido2, direccion, cursos } = req.body;

      //validacion de datos de entrada
      if (!id) {
        return resp.status(404).json({ mensaje: 'Debe indicar el ID' });
      }
      if (!nombre) {
        return resp
          .status(404)
          .json({ mensaje: 'Debe indicar el nombre del producto' });
      }
      if (!cursos) {
        return resp
          .status(404)
          .json({ mensaje: 'Debe indicar el curso del estudiante' });
      }
      if (!apellido1) {
        return resp
          .status(404)
          .json({ mensaje: 'Debe indicar el primer apellido' });
      }
      if (!apellido2) {
        return resp
          .status(404)
          .json({ mensaje: 'Debe indicar el segundo apellido' });
      }
      if (!direccion) {
        return resp.status(404).json({ mensaje: 'Debe indicar su direccion' });
      }

      //validacion de reglas de negocio
      const estudianteRepo = AppDataSource.getRepository(Estudiante);
      const cursosRepo = AppDataSource.getRepository(Curso);

      let cur: Curso;
      const est = await estudianteRepo.findOne({ where: { id } });

      if (est) {
        return resp
          .status(404)
          .json({ mensaje: 'El estudiante ya existe en la base datos.' });
      }

      try {
        cur = await cursosRepo.findOneOrFail({ where: { id: cursos } });
      } catch (error) {
        return resp.status(404).json({ mensaje: 'No existe ese curso.' });
      }

      const fecha = new Date();

      let estudiante = new Estudiante();
      estudiante.id = id;
      estudiante.nombre = nombre;
      estudiante.apellido1 = apellido1;
      estudiante.apellido2 = apellido2;
      estudiante.direccion = direccion;
      estudiante.estado = true;
      estudiante.cursos = cur;

      //validar con class validator
      const errors = await validate(estudiante, {
        validationError: { target: false, value: false },
      });

      if (errors.length > 0) {
        return resp.status(400).json(errors);
      }

      await estudianteRepo.save(estudiante);
      return resp.status(201).json({ mensaje: 'Estudiante creado' });
    } catch (error) {
      return resp.status(400).json({ mensaje: error });
    }
  };

  static update = async (req: Request, resp: Response) => {
    const { id, nombre, apellido1, apellido2, direccion, cursos } = req.body;

    //validacion de datos de entrada
    if (!id) {
      return resp.status(404).json({ mensaje: 'Debe indicar el ID' });
    }
    if (!nombre) {
      return resp
        .status(404)
        .json({ mensaje: 'Debe indicar el nombre del estudiante' });
    }
    if (!apellido1) {
      return resp
        .status(404)
        .json({ mensaje: 'Debe indicar el primer apellido' });
    }
    if (!apellido2) {
      return resp
        .status(404)
        .json({ mensaje: 'Debe indicar el segundo apellido' });
    }
    if (!direccion) {
      return resp.status(404).json({ mensaje: 'Debe indicar la direccion' });
    }
    if (!cursos) {
      return resp
        .status(404)
        .json({ mensaje: 'Debe indicar el curso del estudiante' });
    }

    //validacion de reglas de negocio
    const estudianteRepo = AppDataSource.getRepository(Estudiante);
    const cursosRepo = AppDataSource.getRepository(Curso);
    let est: Estudiante;
    let cur: Curso;
    try {
      est = await estudianteRepo.findOneOrFail({ where: { id } });
    } catch (error) {
      return resp.status(404).json({ mensaje: 'No existe el estudiante.' });
    }

    try {
      cur = await cursosRepo.findOneOrFail({ where: { id: cursos } });
    } catch (error) {
      return resp.status(404).json({ mensaje: 'No existe el curso.' });
    }

    est.id = id;
    est.nombre = nombre;
    est.apellido1 = apellido1;
    est.apellido2 = apellido2;
    est.direccion = direccion;
    est.cursos = cur;

    //validar con class validator
    const errors = await validate(est, {
      validationError: { target: false, value: false },
    });

    if (errors.length > 0) {
      return resp.status(400).json(errors);
    }

    try {
      await estudianteRepo.save(est);
      return resp.status(200).json({ mensaje: 'Se guardo correctamente' });
    } catch (error) {
      return resp.status(400).json({ mensaje: 'No pudo guardar.' });
    }
  };
  static delete = async (req: Request, resp: Response) => {
    try {
      const id = parseInt(req.params['id']);
      if (!id) {
        return resp.status(404).json({ mensaje: 'Debe indicar el ID' });
      }

      const estudianteRepo = AppDataSource.getRepository(Estudiante);
      let est: Estudiante;
      try {
        est = await estudianteRepo.findOneOrFail({
          where: { id: id, estado: true },
        });
      } catch (error) {
        return resp
          .status(404)
          .json({ mensaje: 'No se encuentra el estudiante con ese ID' });
      }

      est.estado = false;
      try {
        await estudianteRepo.save(est);
        return resp.status(200).json({ mensaje: 'Se eliminó correctamente' });
      } catch (error) {
        return resp.status(400).json({ mensaje: 'No se pudo eliminar.' });
      }
    } catch (error) {
      return resp.status(400).json({ mensaje: 'No se pudo eliminar' });
    }
  };
}

export default EstudianteController;
