// import { maxLength } from "class-validator";
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Producto{
    @PrimaryColumn()
    codProducto:number;
    @Column()
    descripcion:string;
    @Column()
    precioProducto:number;
    @Column()
    stockMaximo:number;
    @Column()
    stockMinimo:number;
    @Column()
    codProveedor:number;
    @Column()
    estado:boolean;
    detallesFactura: any;
    

}