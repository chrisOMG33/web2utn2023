import "reflect-metadata";
import { DataSource } from "typeorm";
import { Producto } from "./entity/Producto";
import { Cliente } from "./entity/Cliente";
import { Proveedor } from "./entity/Proveedor";
import { Vendedor } from "./entity/Vendedor";
import { Factura } from "./entity/Factura";
import { DetalleFactura } from "./entity/DetalleFactura";
import { Persona } from "./entity/Persona";
import { TipoCliente } from "./entity/TipoCliente";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "root",
  database: "tienda_informatica",
  synchronize: true,
  logging: false,
  entities: [
    Producto,
    Cliente,
    Persona,
    Proveedor,
    Vendedor,
    Factura,
    DetalleFactura,
    TipoCliente,
  ],
  migrations: [],
  subscribers: [],
});
