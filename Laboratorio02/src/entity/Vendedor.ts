import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Vendedor {

    @PrimaryGeneratedColumn()
    codigo_vendedor: number

    @Column()
    nombre_vendedor: string

    @Column()
    apellidos_vendedor: string

    @Column()
    direccion_vendedor : string

    @Column()
    telefono_vendedor: number
    @Column()
    celular_vendedor: number
    }