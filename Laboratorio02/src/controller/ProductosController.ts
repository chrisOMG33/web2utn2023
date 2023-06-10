import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Producto } from "../entity/Producto";

class ProductosController {
  static getAll = async (req: Request, resp: Response) => {
    try {
      const productosRepo = AppDataSource.getRepository(Producto);

      const listaProductos = await productosRepo.find({where: { estado: true },});

      if (listaProductos.length == 0) {
        return resp.status(404).json({ mensaje: "No se encontró resultados." });
      }
      return resp.status(200).json(listaProductos);
    } catch (error) {
      return resp.status(400).json({ mensaje: error });
    }
  };

  static getByCod = async (req: Request, resp: Response) => {
   
    try {
        const codProducto = parseInt(req.params["codProducto"]);
    
        if(!codProducto){
            return resp.status(404).json({ mensaje: "No se indica el código" });
        }
    
        const productosRepo = AppDataSource.getRepository(Producto);
        let producto;
        try {
           producto= await productosRepo.findOneOrFail({where: {codProducto}})
        } catch (error) {
          return resp.status(404).json({ mensaje: "No se encontro el producto con ese ID" });
        }
        return resp.status(200).json(producto);
    
    } catch (error) {
        return resp.status(400).json({ mensaje: error });
    }
   
  };

  static add = async (req: Request, resp: Response) => {

    try {
      // Destructurando
      const {codProducto, descripcion, precioProducto, stockMaximo, stockMinimo, codProveedor, estado}=req.body;
      // validacion de datos de entrada
      if(!codProducto) {
        return resp.status(400).json({ mensaje: "Debe indicar el código" });
      }
      if(!descripcion) {
        return resp.status(400).json({ mensaje: "Debe indicar una descripción" });
      }
      if(!precioProducto) {
        return resp.status(400).json({ mensaje: "Debe indicar el precio" });
      }
      if(stockMaximo<0) {
        return resp.status(400).json({ mensaje: "Debe indicar un stock mayor que 0" });
      }
      if(stockMinimo<0) {
        return resp.status(400).json({ mensaje: "El stock debe ser mayor que 0" });
      }
      if(!codProducto) {
        return resp.status(400).json({ mensaje: "Debe indicar el código" });
      }
      // validacion de reglas de negocio
      const productosRepo = AppDataSource.getRepository(Producto);
      const pro = await productosRepo.findOne({where:{codProducto}});

      if(pro) {
        return resp.status(400).json({ mensaje: "El producto ya existe en la base de datos" });
      }

      let producto= new Producto();
      producto.codProducto= codProducto;
      producto.descripcion= descripcion;
      producto.precioProducto= precioProducto;
      producto.stockMaximo= stockMaximo;
      producto.stockMinimo= stockMinimo;
      producto.codProveedor= codProveedor;
      producto.estado= estado;

      await productosRepo.save(producto);
      return resp.status(201).json({ mensaje: "Producto creado" });
    } catch (error) {
      return resp.status(400).json({ mensaje: error });
    }
    
  };

  static update = async (req: Request, resp: Response) => {};
  static delete = async (req: Request, resp: Response) => {};
}

export default ProductosController;