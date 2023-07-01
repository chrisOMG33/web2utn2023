import { IsEmail, MaxLength, MinLength } from "class-validator";
import { Column, Entity, PrimaryColumn, Unique } from "typeorm";
import * as bcrypt from "bcryptjs";

@Entity()
export class Usuario {
  @PrimaryColumn()
  cedula: string;

  @Column({ length: 20 })
  @MaxLength(20)
  nombre: string;

  @Column()
  @MaxLength(20)
  apellido1: string;

  @Column()
  @MaxLength(20)
  apellido2: string;

  @Column()
  fecha_ingreso: Date;

  @Column({ unique: true })
  @IsEmail()
  @MaxLength(30)
  correo: string;

  @Column()
  rol: string;

  @Column()
  @MaxLength(12)
  @MinLength(5)
  contrasena: string;

  @Column({ default: true })
  estado: boolean;

  hashPassword(): void {
    const salt = bcrypt.genSaltSync(10);
    this.contrasena = bcrypt.hashSync(this.contrasena, salt);
  }

  checkPassword(contra: string): boolean {
    return bcrypt.compareSync(contra, this.contrasena);
  }
}
