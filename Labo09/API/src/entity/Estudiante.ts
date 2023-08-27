import { IsNotEmpty, MaxLength } from 'class-validator';
import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';
import { Curso } from './Curso';

@Entity()
export class Estudiante {
  @PrimaryColumn()
  id: number;

  @Column({ length: 50 })
  @MaxLength(50, { message: 'Debe ser menos de 50 caracteres' })
  @IsNotEmpty()
  nombre: string;

  @Column()
  apellido1: string;
  @Column()
  apellido2: string;

  @Column()
  direccion: string;
  @Column()
  estado: boolean;

  @ManyToOne(() => Curso, (cursos) => cursos.estudiantes)
  cursos: Curso;
}
