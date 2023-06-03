import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Cliente {

    @PrimaryGeneratedColumn()
    cedula: number

    @Column()
    nombre: string

    @Column()
    apellido1: string

    @Column()
    apellido2: string

    @Column()
    fechaNacimiento: Date

    @Column()
    genero: string

    @Column()
    estado: string
    
    }