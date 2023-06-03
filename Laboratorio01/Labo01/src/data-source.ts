import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { ClientRequest } from "http"
import { Cliente } from "./entity/Clientes"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "dbLab1",
    synchronize: true,
    logging: false,
    entities: [Cliente],
    migrations: [],
    subscribers: [],
})
