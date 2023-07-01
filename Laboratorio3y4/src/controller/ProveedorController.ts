import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Proveedor } from "../entity/Proveedor";

// Obtener todos los proveedores
class ProveedorController {
    static getBycodigo_proveedor(arg0: string, getBycodigo_proveedor: any) {
        throw new Error("Method not implemented.");
    }
    static getAll = async (req: Request, resp: Response) => {
  try {
    const proveedorRepo = AppDataSource.getRepository(Proveedor);
    const proveedor = await proveedorRepo.find();
    return resp.json(proveedor);
  } catch (error) {
    console.error(error);
    return resp.status(404).json({ message: "No se pudo obtener los proveedores" });
  }
}};

// Crear un nuevo proveedor
export const crearProveedor = async (req, resp) => {
  try {
    const { codigo_proveedor, nombre_proveedor, apellidos_proveedor, direccion_proveedor, provincia_proveedor, telefono_proveedor } = req.body;

    const proveedorRepo = AppDataSource.getRepository(Proveedor);

    const proveedor = new Proveedor();
    proveedor.codigo_proveedor = codigo_proveedor;
    proveedor.nombre_proveedor = nombre_proveedor;
    proveedor.apellidos_proveedor = apellidos_proveedor;
    proveedor.direccion_proveedor = direccion_proveedor;
    proveedor.provincia_proveedor = provincia_proveedor;
    proveedor.telefono_proveedor = telefono_proveedor;

    await proveedorRepo.save(proveedor);

    return resp.json({ message: "Proveedor se creo correctamente" });
  } catch (error) {
    console.error(error);
    return resp.status(404).json({ message: "No se pudo crear el proveedor" });
  }
};

// Obtener un proveedor por su código
export const getBycodigo_proveedor = async (req: Request, resp: Response) => {
   
    try {
        const codigo_proveedor = parseInt(req.params["codigo_proveedor"]);
    
        if(!codigo_proveedor){
            return resp.status(404).json({ mensaje: "No se indica el Ruc" });
        }
    
        const clienteRepo = AppDataSource.getRepository(Proveedor);
        let cliente;
        try {
            cliente= await clienteRepo.findOneOrFail({where: {codigo_proveedor}})
        } catch (error) {
          return resp.status(404).json({ mensaje: "No se encontro un cliente con ese Ruc" });
        }
        return resp.status(200).json(cliente);
    
    } catch (error) {
        return resp.status(400).json({ mensaje: error });
    }
   
};
 

// Actualizar un proveedor
export const actualizarProveedor = async (req, resp) => {
  try {
    const { codigo_proveedor } = req.params;
    const { nombre_proveedor, apellidos_proveedor, direccion_proveedor, provincia_proveedor, telefono_proveedor } = req.body;

    const proveedorRepo = AppDataSource.getRepository(Proveedor);;

    const proveedor = await proveedorRepo.findOne(codigo_proveedor);

    if (!proveedor) {
      return resp.status(404).json({ message: "No se encontro el encontrado" });
    }

    proveedor.nombre_proveedor = nombre_proveedor;
    proveedor.apellidos_proveedor = apellidos_proveedor;
    proveedor.direccion_proveedor = direccion_proveedor;
    proveedor.provincia_proveedor = provincia_proveedor;
    proveedor.telefono_proveedor = telefono_proveedor;

    await proveedorRepo.save(proveedor);

    return resp.json({ message: "El proveedor se actualizo correctamente" });
  } catch (error) {
    console.error(error);
    return resp.status(404).json({ message: "No se pudo actualizar el proveedor" });
  }
};

// Eliminar un proveedor
export const borrarProveedor = async (req, resp) => {
  try {
    const { codigo_proveedor } = req.params;

    const proveedorRepo = AppDataSource.getRepository(Proveedor);;
    const proveedor = await proveedorRepo.findOne(codigo_proveedor);

    if (!proveedor) {
      return resp.status(404).json({ message: "Proveedor no encontrado" });
    }

    await proveedorRepo.remove(proveedor);

    return resp.json({ message: "Proveedor se eliminado correctamente" });
  } catch (error) {
    console.error(error);
    return resp.status(404).json({ message: "No se pudo eliminar el proveedor" });
  }
};
export default ProveedorController;