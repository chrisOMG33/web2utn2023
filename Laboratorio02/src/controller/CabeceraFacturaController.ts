import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { CabeceraFactura } from "../entity/CabeceraFactura";
import { DetalleFactura } from "../entity/DetalleFactura";

class CabeceraFacturaController {
  static getAll(arg0: string, getAll: any) {
      throw new Error("Method not implemented.");
  }
  async createCabeceraFactura(req: Request, resp: Response) {
    try {
      const { numero, fecha, Ruc_cliente, codigo_vendedor, detalles } = req.body;
      const cabeceraRepo = AppDataSource.getRepository(CabeceraFactura);
      const detalleRepo = AppDataSource.getRepository(DetalleFactura);

      // Crear la cabecera de la factura
      const cabeceraFactura = new CabeceraFactura();
      cabeceraFactura.numero = numero;
      cabeceraFactura.fecha = fecha;
      cabeceraFactura.Ruc_cliente = Ruc_cliente;
      cabeceraFactura.codigo_vendedor = codigo_vendedor;


      const detallesFactura = detalles.map((detalle) => {
        const detalleFactura = new DetalleFactura();
        detalleFactura.cantidad = detalle.cantidad;
        detalleFactura.codigo_producto = detalle.codigo_producto;
        detalleFactura.cabeceraFactura = cabeceraFactura; 
      
        return detalleFactura;
      });

      await cabeceraRepo.save(cabeceraFactura);
      await detalleRepo.save(detallesFactura);

      return resp.json({ message: "Se creo la cabecera correctamente" });
    } catch (error) {
      console.error(error);
      return resp.status(404).json({ message: "No se creo la cabecera de factura" });
    }
  }
}
export default CabeceraFacturaController;

