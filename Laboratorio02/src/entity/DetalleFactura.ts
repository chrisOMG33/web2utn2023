import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { CabeceraFactura } from "./CabeceraFactura";
import { Producto } from "./Producto";

@Entity()
export class DetalleFactura {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cantidad: number;

  @ManyToOne(() => CabeceraFactura, (cabeceraFactura) => cabeceraFactura.detalles)
  cabeceraFactura: CabeceraFactura;

  @ManyToOne(() => Producto, (producto) => producto.detallesFactura)
  producto: Producto;
    codigo_producto: any;
}
