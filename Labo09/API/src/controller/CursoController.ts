import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { Curso } from '../entity/Curso';

class CursoController {
  static getAll = async (req: Request, resp: Response) => {
    try {
      const cursosRepo = AppDataSource.getRepository(Curso);

      const lista = await cursosRepo.find({
        where: { estado: true },
      });

      if (lista.length == 0) {
        return resp.status(404).json({ mensaje: 'No se encontró resultados.' });
      }
      return resp.status(200).json(lista);
    } catch (error) {
      return resp.status(400).json({ mensaje: error });
    }
  };
}

export default CursoController;
