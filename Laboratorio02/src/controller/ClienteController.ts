import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Cliente } from "../entity/Cliente";

class ClienteController {
    static getByRuc(arg0: string, getByRuc: any) {
        throw new Error("Method not implemented.");
    }
    static getAll = async (req: Request, resp: Response) => {
  try {
    const clienteRepo = AppDataSource.getRepository(Cliente);
    const clientes = await clienteRepo.find();
    return resp.json(clientes);
  } catch (error) {
    console.error(error);
    return resp.status(404).json({ message: "No se pudo obtener los clientes" });
  }
}};

// Crear un nuevo cliente
    export const crearCliente = async (req, resp) => {
  try {
    const { Ruc_cliente, nombre_cliente, apellidos_cliente, direccion_cliente, telefono_cliente } = req.body;

    const clienteRepo = AppDataSource.getRepository(Cliente);

    const cliente = new Cliente();
    cliente.Ruc_cliente = Ruc_cliente;
    cliente.nombre_cliente = nombre_cliente;
    cliente.apellidos_cliente = apellidos_cliente;
    cliente.direccion_cliente = direccion_cliente;
    cliente.telefono_cliente = telefono_cliente;

    await clienteRepo.save(cliente);

    return resp.json({ message: "Se creo el cliente correctamente" });
  } catch (error) {
    console.error(error);
    return resp.status(404).json({ message: "Error al crear el cliente" });
  }
};

// Obtener un cliente por su RUC
export const getByRuc = async (req: Request, resp: Response) => {
   
    try {
        const Ruc_cliente = parseInt(req.params["Ruc_cliente"]);
    
        if(!Ruc_cliente){
            return resp.status(404).json({ mensaje: "No se indica el Ruc" });
        }
    
        const clienteRepo = AppDataSource.getRepository(Cliente);
        let cliente;
        try {
            cliente= await clienteRepo.findOneOrFail({where: {Ruc_cliente}})
        } catch (error) {
          return resp.status(404).json({ mensaje: "No se encontro un cliente con ese Ruc" });
        }
        return resp.status(200).json(cliente);
    
    } catch (error) {
        return resp.status(400).json({ mensaje: error });
    }
   
};
 
// Actualizo cliente
export const actualizarCliente = async (req, res) => {
  try {
    const { Ruc_cliente } = req.params;
    const { nombre_cliente, apellidos_cliente, direccion_cliente, telefono_cliente } = req.body;

    const clienteRepo = AppDataSource.getRepository(Cliente);

    const cliente = await clienteRepo.findOne(Ruc_cliente);

    if (!cliente) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }

    cliente.nombre_cliente = nombre_cliente;
    cliente.apellidos_cliente = apellidos_cliente;
    cliente.direccion_cliente = direccion_cliente;
    cliente.telefono_cliente = telefono_cliente;

    await clienteRepo.save(cliente);

    res.json({ message: "El cliente se actualizo correctamente" });
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: "No se pudo actualizar el cliente" });
  }
};

// Borrar cliente
export const borrarCliente = async (req, resp) => {
  try {
    const { Ruc_cliente } = req.params;

    const clienteRepo = AppDataSource.getRepository(Cliente);
    const cliente = await clienteRepo.findOne(Ruc_cliente);

    if (!cliente) {
      return resp.status(404).json({ message: "Cliente no encontrado" });
    }

    await clienteRepo.remove(cliente);

    return resp.json({ message: "Cliente eliminado correctamente" });
  } catch (error) {
    console.error(error);
    return resp.status(404).json({ message: "No se pudo eliminar el cliente" });
  }
};
export default ClienteController;