import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Usuario } from "../entity/Usuario";
import { validate } from "class-validator";

class UsuarioController {
  static getAll = async (req: Request, resp: Response) => {
    try {
      const usuarioRepo = AppDataSource.getRepository(Usuario);

      const listaUsuarios = await usuarioRepo.find({ where: { estado: true } });

      if (listaUsuarios.length == 0) {
        return resp
          .status(404)
          .json({ mensaje: "No se encontraron usuarios." });
      }
      return resp.status(200).json(listaUsuarios);
    } catch (error) {
      return resp.status(400).json({ mensaje: error });
    }
  };
  //Obtener por ID
  static getById = async (req: Request, resp: Response) => {
    try {
      const id = parseInt(req.params["id"]);

      if (!id) {
        return resp.status(404).json({ mensaje: "No se indica el ID" });
      }

      const usuarioRepo = AppDataSource.getRepository(Usuario);
      let usuario;
      try {
        usuario = await usuarioRepo.findOneOrFail({
          where: { id, estado: true },
        });
      } catch (error) {
        return resp
          .status(404)
          .json({ mensaje: "No se encontró el usuario con ese ID" });
      }

      return resp.status(200).json(usuario);
    } catch (error) {
      return resp.status(400).json({ mensaje: error });
    }
  };
  //Creación del usuario
  static add = async (req: Request, resp: Response) => {
    try {
      const usuarioRepo = AppDataSource.getRepository(Usuario);
      const nuevoUsuario = usuarioRepo.create(req.body);
      const errores = await validate(nuevoUsuario);
      if (errores.length > 0) {
        return resp.status(400).json({ mensaje: errores });
      }
      const usuarioGuardado = await usuarioRepo.save(nuevoUsuario);
      return resp.status(201).json(usuarioGuardado);
    } catch (error) {
      return resp.status(400).json({ mensaje: error });
    }
  };
  //Actualizar usuario
  static update = async (req: Request, resp: Response) => {
    const { id, nombre, apellido1, apellido2, correo, contrasena, rol } =
      req.body;

    //validacion de datos de entrada
    if (!id) {
      return resp.status(404).json({ mensaje: "Debe indicar el ID" });
    }
    if (!nombre) {
      return resp
        .status(404)
        .json({ mensaje: "Debe indicar el nombre del producto" });
    }
    if (!apellido1) {
      return resp
        .status(404)
        .json({ mensaje: "Debe indicar el primer apellido" });
    }
    if (!apellido2) {
      return resp
        .status(404)
        .json({ mensaje: "Debe indicar el segundo apellido" });
    }
    if (!contrasena) {
      return resp.status(404).json({ mensaje: "Debe indicar una contraseña" });
    }
    if (!rol) {
      return resp.status(404).json({ mensaje: "Debe indicar el rol" });
    }

    //Validar Reglas de negocio
    const usuarioRepo = AppDataSource.getRepository(Usuario);
    let usu: Usuario;
    try {
      usu = await usuarioRepo.findOneOrFail({ where: { id } });
    } catch (error) {
      return resp.status(404).json({ mensaje: "No existe el usuario." });
    }

    usu.nombre = nombre;
    usu.apellido1 = apellido1;
    usu.apellido2 = apellido2;
    usu.contrasena = contrasena;
    usu.rol = rol;

    //Validar con class validator
    const errors = await validate(usu, {
      validationError: { target: false, value: false },
    });

    if (errors.length > 0) {
      return resp.status(400).json(errors);
    }

    try {
      await usuarioRepo.save(usu);
      return resp.status(200).json({ mensaje: "Se guardo correctamente" });
    } catch (error) {
      return resp.status(400).json({ mensaje: "No pudo guardar." });
    }
  };
  //Borrar usuario
  static delete = async (req: Request, resp: Response) => {
    try {
      const id = parseInt(req.params["id"]);
      if (!id) {
        return resp
          .status(404)
          .json({ mensaje: "Debe indicar el ID del usuario" });
      }

      const usuarioRepo = AppDataSource.getRepository(Usuario);
      let usu: Usuario;
      try {
        usu = await usuarioRepo.findOneOrFail({
          where: { id: id, estado: true },
        });
      } catch (error) {
        return resp
          .status(404)
          .json({ mensaje: "No se encuentra el usuario con ese ID" });
      }

      usu.estado = false;
      try {
        await usuarioRepo.save(usu);
        return resp.status(200).json({ mensaje: "Se eliminó correctamente" });
      } catch (error) {
        return resp.status(400).json({ mensaje: "No se pudo eliminar." });
      }
    } catch (error) {
      return resp.status(400).json({ mensaje: "No se pudo eliminar" });
    }
  };
}

export default UsuarioController;
