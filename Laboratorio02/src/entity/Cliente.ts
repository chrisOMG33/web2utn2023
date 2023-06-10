import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Cliente {

    @PrimaryGeneratedColumn()
    Ruc_cliente: number

    @Column()
    nombre_cliente: string

    @Column()
    apellidos_cliente: string

    @Column()
    direccion_cliente: string

    @Column()
    telefono_cliente: number
    
    }