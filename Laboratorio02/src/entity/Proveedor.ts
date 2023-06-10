import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Proveedor {

    @PrimaryGeneratedColumn()
    codigo_proveedor: number

    @Column()
    nombre_proveedor: string

    @Column()
    apellidos_proveedor: string

    @Column()
    direccion_proveedor : string

    @Column()
    provincia_proveedor: string

    @Column()
    telefono_proveedor: number
    
    }