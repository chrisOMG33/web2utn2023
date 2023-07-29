import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Cliente } from "./Cliente";

@Entity()
export class TipoCliente {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nombre: string;
  @Column()
  estado: boolean;

  @OneToMany(() => Cliente, (cliente) => cliente.tipoCliente)
  cliente: Cliente[];
}
