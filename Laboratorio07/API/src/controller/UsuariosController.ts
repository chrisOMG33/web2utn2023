import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { Usuarios } from '../entity/Usuario';
import { validate } from 'class-validator';
import { errorMonitor } from 'events';

class UsuariosController {
  static getAll = async (req: Request, resp: Response) => {
    try {
      const repoUsuario = AppDataSource.getRepository(Usuarios);
      const listaUsuario = await repoUsuario.find({ where: { estado: true } });

      if (listaUsuario.length == 0) {
        return resp
          .status(404)
          .json({ mensaje: 'No hay registros de usuarios' });
      }

      return resp.status(200).json(listaUsuario);
    } catch (error) {
      return resp
        .status(400)
        .json({ mensaje: 'Error desconocido. PAGUE 50MIL DOLARES' });
    }
  };

  static add = async (req: Request, resp: Response) => {
    try {
      const { cedula, nombre, apellido1, apellido2, correo, rol, contrasena } =
        req.body;

      // typescript
      const fecha = new Date();

      let usuario = new Usuarios();
      usuario.cedula = cedula;
      usuario.nombre = nombre;
      usuario.apellido1 = apellido1;
      usuario.apellido2 = apellido2;
      usuario.fecha_ingreso = fecha;
      usuario.correo = correo;
      usuario.contrasena = contrasena;
      usuario.rol = rol;
      usuario.estado = true;

      //validacion de datos de entrada
      const validateOpt = { validationError: { target: false, value: false } };
      const errores = await validate(usuario, validateOpt);

      if (errores.length != 0) {
        return resp.status(400).json(errores);
      }
      // reglas de negocio
      // valiando que el usuario o haya sido creado anteriormente
      const repoUsuario = AppDataSource.getRepository(Usuarios);
      let usuarioExist = await repoUsuario.findOne({
        where: { cedula: cedula },
      });
      if (usuarioExist) {
        resp.status(400).json({ mensaje: 'El usuario ya existe' });
      }

      // valiado que el correo no este registrado a algun usuario ya creado
      usuarioExist = await repoUsuario.findOne({ where: { correo: correo } });
      if (usuarioExist) {
        resp
          .status(400)
          .json({ mensaje: 'Ya existe un usuario registrado con el correo' });
      }

      usuario.hashPassword();

      try {
        await repoUsuario.save(usuario);
        return resp.status(201).json({ mensaje: 'Se ha creado el usuario' });
      } catch (error) {
        resp.status(400).json(error);
      }
    } catch (error) {
      resp.status(400).json({ mensaje: 'Error desconocido.' });
    }
  };
  //update
  static update = async (req: Request, resp: Response) => {
    const { cedula, nombre, apellido1, apellido2, correo, rol, contrasena } =
      req.body;

    // Validación de datos de entrada
    if (!cedula) {
      return resp
        .status(404)
        .json({ mensaje: 'Debe indicar la cedula del usuario' });
    }
    if (!nombre) {
      return resp
        .status(404)
        .json({ mensaje: 'Debe indicar el nombre del usuario' });
    }
    if (!apellido1) {
      return resp
        .status(404)
        .json({ mensaje: 'Debe indicar el primer apellido del usuario' });
    }

    // Validación de reglas de negocio
    const usuariosRepo = AppDataSource.getRepository(Usuarios);
    let usuario: Usuarios;
    try {
      usuario = await usuariosRepo.findOne({ where: { cedula } });
    } catch (error) {
      return resp.status(404).json({ mensaje: 'No existe el usuario.' });
    }

    usuario.nombre = nombre;
    usuario.apellido1 = apellido1;
    usuario.apellido2 = apellido2;
    usuario.correo = correo;
    usuario.rol = rol;

    // Si se proporciona una nueva contraseña, actualizarla y hashearla
    if (contrasena) {
      usuario.contrasena = contrasena;
      usuario.hashPassword();
    }

    // Validar con class validator
    const errors = await validate(usuario, {
      validationError: { target: false, value: false },
    });

    if (errors.length > 0) {
      return resp.status(400).json(errors);
    }

    try {
      await usuariosRepo.save(usuario);
      return resp.status(200).json({ mensaje: 'Se guardó correctamente' });
    } catch (error) {
      return resp.status(400).json({ mensaje: 'No se pudo guardar.' });
    }
  };
  //delete
  static delete = async (req: Request, resp: Response) => {
    try {
      const { cedula } = req.params;

      const repoUsuario = AppDataSource.getRepository(Usuarios);
      const usuario = await repoUsuario.findOne({ where: { cedula: cedula } });

      if (!usuario) {
        return resp.status(404).json({ mensaje: 'Usuario no encontrado' });
      }

      usuario.estado = false;

      try {
        await repoUsuario.save(usuario);
        return resp.status(200).json({ mensaje: 'Usuario eliminado' });
      } catch (error) {
        resp.status(400).json(error);
      }
    } catch (error) {
      resp.status(400).json({ mensaje: 'Error.' });
    }
  };
}

export default UsuariosController;
