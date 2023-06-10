import { Entity, PrimaryColumn, Column, OneToMany } from "typeorm";
import { DetalleFactura } from "./DetalleFactura";

@Entity()
export class CabeceraFactura {
  @PrimaryColumn()
  numero: string;

  @Column()
  fecha: Date;

  @Column()
  Ruc_cliente: number;

  @Column()
  codigo_vendedor: string;

  @OneToMany(() => DetalleFactura, (detalleFactura) => detalleFactura.cabeceraFactura)
  detalles: DetalleFactura[];
}
