import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Vendedor } from "../entity/Vendedor";

// Obtener todos los vendedores
class VendedorController {
    static getBycodigo_vendedor(arg0: string, getBycodigo_vendedor: any) {
        throw new Error("Method not implemented.");
    }
    static getAll = async (req: Request, resp: Response) => {
  try {
    const vendedorRepo = AppDataSource.getRepository(Vendedor);
    const vendedor = await vendedorRepo.find();
    return resp.json(vendedor);
  } catch (error) {
    console.error(error);
    return resp.status(404).json({ message: "No se pudo obtener los vendedores" });
  }
}};

// Crear un nuevo vendedor
export const crearVendedor = async (req, resp) => {
  try {
    const { codigo_vendedor, nombre_vendedor, apellidos_vendedor, direccion_vendedor, telefono_vendedor, celular_vendedor } = req.body;

    const vendedorRepo = AppDataSource.getRepository(Vendedor);

    const vendedor = new Vendedor();
    vendedor.codigo_vendedor = codigo_vendedor;
    vendedor.nombre_vendedor = nombre_vendedor;
    vendedor.apellidos_vendedor = apellidos_vendedor;
    vendedor.direccion_vendedor = direccion_vendedor;
    vendedor.telefono_vendedor = telefono_vendedor;
    vendedor.celular_vendedor = celular_vendedor;

    await vendedorRepo.save(vendedor);

    return resp.json({ message: "Vendedor se creo correctamente" });
  } catch (error) {
    console.error(error);
    return resp.status(404).json({ message: "No se pudo crear el vendedor" });
  }
};

// Obtener un vendedor por su código
export const getBycodigo_vendedor = async (req: Request, resp: Response) => {
   
    try {
        const codigo_vendedor = parseInt(req.params["codigo_vendedor"]);
    
        if(!codigo_vendedor){
            return resp.status(404).json({ mensaje: "No se indica el código" });
        }
    
        const vendedorRepo= AppDataSource.getRepository(Vendedor);
        let vendedor;
        try {
            vendedor= await vendedorRepo.findOneOrFail({where: {codigo_vendedor}})
        } catch (error) {
          return resp.status(404).json({ mensaje: "No se encontro un vendedor con ese código" });
        }
        return resp.status(200).json(vendedor);
    
    } catch (error) {
        return resp.status(400).json({ mensaje: error });
    }
   
};
 
// Actualizar un proveedor
export const actualizarVendedor = async (req, resp) => {
  try {
    const { codigo_vendedor } = req.params;
    const { nombre_vendedor, apellidos_vendedor, direccion_vendedor, telefono_vendedor, celular_vendedor } = req.body;

    const vendedorRepo = AppDataSource.getRepository(Vendedor);;

    const vendedor = await vendedorRepo.findOne(codigo_vendedor);

    if (!vendedor) {
      return resp.status(404).json({ message: "No se encontro el vendedor" });
    }
    vendedor.codigo_vendedor = codigo_vendedor;
    vendedor.nombre_vendedor = nombre_vendedor;
    vendedor.apellidos_vendedor = apellidos_vendedor;
    vendedor.direccion_vendedor = direccion_vendedor;
    vendedor.telefono_vendedor = telefono_vendedor;
    vendedor.celular_vendedor = celular_vendedor;

    await vendedorRepo.save(vendedor);

    return resp.json({ message: "El vendedor se actualizo correctamente" });
  } catch (error) {
    console.error(error);
    return resp.status(404).json({ message: "No se pudo actualizar el vendedor" });
  }
};

// Eliminar un vendedor
export const borrarVendedor = async (req, resp) => {
  try {
    const { codigo_vendedor } = req.params;

    const vendedorRepo = AppDataSource.getRepository(Vendedor);;
    const vendedor = await vendedorRepo.findOne(codigo_vendedor);

    if (!vendedor) {
      return resp.status(404).json({ message: "Vendedor no encontrado" });
    }

    await vendedorRepo.remove(vendedor);

    return resp.json({ message: "Vendedor se eliminado correctamente" });
  } catch (error) {
    console.error(error);
    return resp.status(404).json({ message: "No se pudo eliminar el Vendedor" });
  }
};
export default VendedorController;