import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Factura } from "../entity/Factura";
import { validate } from "class-validator";

//controlador de factura - obtenemos todos los datos
class FacturaController {
  static getAll = async (req: Request, resp: Response) => {
    try {
      const facturaRepo = AppDataSource.getRepository(Factura);
      let lista;
      try {
        lista = await facturaRepo.find({
          where: { estado: true },
          relations: {
            detallesFactura: { producto: true },
            cliente: { persona: true },
          },
        });
      } catch (error) {
        return resp.status(404).json({ mensaje: "No se encontraron datos.." });
      }

      if (lista.lenght == 0) {
        return resp.status(404).json({ mensaje: "No se encontraron datos." });
      }
      return resp.status(200).json(lista);
    } catch (error) {
      return resp.status(400).json({ mensaje: "Error al cargar datos." });
    }
  };
  //se consulta por el ID
  static getById = async (req: Request, resp: Response) => {
    const { id } = req.params;

    const facturaRepo = AppDataSource.getRepository(Factura);
    const factura = await facturaRepo.findOne({
      where: { estado: true },
    });

    return resp.json(factura);
  };
  //modificacion de la factura
  static update = async (req: Request, resp: Response) => {
    const { id } = req.params;
    const { cliente, detalles } = req.body;

    const facturaRepo = AppDataSource.getRepository(Factura);
    let factura = await facturaRepo.findOne({ where: { estado: true } });

    if (!factura) {
      return resp.status(404).json({ message: "Factura no encontrada" });
    }

    factura.cliente = cliente;

    const detalleFacturas = detalles.map((detalle) => {
      const detalleFactura = new detalleFacturas();
      detalleFactura.producto = detalle.producto;
      detalleFactura.factura = factura;
      return detalleFactura;
    });
    await facturaRepo.save(factura);

    return resp.json(factura);
  };
  //eliminamos datos
  static delete = async (req: Request, resp: Response) => {
    try {
      const idFactura = parseInt(req.params["idFactura"]);
      if (!idFactura) {
        return resp
          .status(404)
          .json({ mensaje: "Debe indicar el ID de la factura" });
      }

      const facturaRepo = AppDataSource.getRepository(Factura);
      let fact: Factura;
      try {
        fact = await facturaRepo.findOneOrFail({
          where: { idFactura: idFactura, estado: true },
        });
      } catch (error) {
        return resp
          .status(404)
          .json({ mensaje: "No se encuentro la factura con ese ID" });
      }
      //eliminado logico
      fact.estado = false;
      try {
        await facturaRepo.save(fact);
        return resp.status(200).json({ mensaje: "Se eliminó correctamente" });
      } catch (error) {
        return resp.status(400).json({ mensaje: "No se pudo eliminar." });
      }
    } catch (error) {
      return resp.status(400).json({ mensaje: "No se pudo eliminar" });
    }
  };
}
export default FacturaController;
