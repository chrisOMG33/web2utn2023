import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Estudiante } from './Estudiante';

@Entity()
export class Curso {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 25 })
  nombreProfesor: String;

  @Column({ length: 25 })
  nombreCurso: String;
  @Column()
  estado: boolean;

  @OneToMany(() => Estudiante, (estudiante) => estudiante.cursos)
  estudiantes: Estudiante[];
}
