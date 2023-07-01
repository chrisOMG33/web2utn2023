import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
} from "typeorm";
import { Persona } from "./Persona";
import { TipoCliente } from "./TipoCliente";
import { Factura } from "./Factura";

@Entity()
export class Cliente {
  @PrimaryColumn()
  cedula: string;

  @ManyToOne(() => TipoCliente, (tipoCliente) => tipoCliente.cliente)
  tipoCliente: TipoCliente;
  @Column()
  fechaIngreso: Date;

  @OneToOne(() => Persona, { cascade: ["insert", "update"] })
  @JoinColumn({ name: "cedula" })
  persona: Persona; //uno a uno

  @OneToMany(() => Factura, (factura) => factura.cliente)
  facturas: Factura[];
}
