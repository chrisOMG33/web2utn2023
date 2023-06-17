"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var Producto_1 = require("./entity/Producto");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "pruebauni",
    synchronize: true,
    logging: false,
    entities: [Producto_1.Producto],
    migrations: [],
    subscribers: [],
});
//# sourceMappingURL=data-source.js.map