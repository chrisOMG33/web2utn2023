import { IsEmail } from "class-validator";
import { Column, Entity, PrimaryColumn, Unique } from "typeorm";

@Entity()
export class Usuario {
  @PrimaryColumn()
  id: number;
  @Column()
  nombre: string;
  @Column()
  apellido1: string;
  @Column()
  apellido2: string;
  @Column({ unique: true })
  @IsEmail()
  correo: String;
  @Column()
  contrasena: String;
  @Column()
  rol: String;
  @Column()
  estado: boolean;
}
