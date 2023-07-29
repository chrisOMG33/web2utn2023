"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var data_source_1 = require("../data-source");
var Producto_1 = require("../entity/Producto");
var ProductosController = /** @class */ (function () {
    function ProductosController() {
    }
    var _a;
    _a = ProductosController;
    ProductosController.getAll = function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
        var productosRepo, listaProductos, error_1;
        return __generator(_a, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    productosRepo = data_source_1.AppDataSource.getRepository(Producto_1.Producto);
                    return [4 /*yield*/, productosRepo.find({
                            where: { estado: true },
                        })];
                case 1:
                    listaProductos = _b.sent();
                    if (listaProductos.length == 0) {
                        return [2 /*return*/, resp.status(404).json({ mensaje: "No se encontró resultados." })];
                    }
                    return [2 /*return*/, resp.status(200).json(listaProductos)];
                case 2:
                    error_1 = _b.sent();
                    return [2 /*return*/, resp.status(400).json({ mensaje: error_1 })];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    ProductosController.getById = function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
        var id, productosRepo, producto, error_2, error_3;
        return __generator(_a, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 5, , 6]);
                    id = parseInt(req.params["id"]);
                    if (!id) {
                        return [2 /*return*/, resp.status(404).json({ mensaje: "No se indica el ID" })];
                    }
                    productosRepo = data_source_1.AppDataSource.getRepository(Producto_1.Producto);
                    producto = void 0;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, productosRepo.findOneOrFail({ where: { id: id } })];
                case 2:
                    producto = _b.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _b.sent();
                    return [2 /*return*/, resp.status(404).json({ mensaje: "No se encontro el producto con ese ID" })];
                case 4: 
                // if(!producto){
                //     return resp.status(404).json({ mensaje: "No se encontro el producto con ese ID" });
                // }
                return [2 /*return*/, resp.status(200).json(producto)];
                case 5:
                    error_3 = _b.sent();
                    return [2 /*return*/, resp.status(400).json({ mensaje: error_3 })];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    ProductosController.add = function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
        var _b, id, nombre, precio, stock, fechaIngreso, productosRepo, pro, fecha, producto, error_4;
        return __generator(_a, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 3, , 4]);
                    _b = req.body, id = _b.id, nombre = _b.nombre, precio = _b.precio, stock = _b.stock, fechaIngreso = _b.fechaIngreso;
                    // validacion de datos de entrada
                    if (!id) {
                        return [2 /*return*/, resp.status(400).json({ mensaje: "Debe indicar el ID" })];
                    }
                    if (!nombre) {
                        return [2 /*return*/, resp.status(400).json({ mensaje: "Debe indicar un nombre" })];
                    }
                    if (!precio) {
                        return [2 /*return*/, resp.status(400).json({ mensaje: "Debe indicar el precio" })];
                    }
                    if (precio < 0) {
                        return [2 /*return*/, resp.status(400).json({ mensaje: "Debe indicar un precio mayor que 0" })];
                    }
                    if (!stock) {
                        return [2 /*return*/, resp.status(400).json({ mensaje: "Debe indicar el precio" })];
                    }
                    if (stock < 0) {
                        return [2 /*return*/, resp.status(400).json({ mensaje: "El stock debe ser mayor que 0" })];
                    }
                    productosRepo = data_source_1.AppDataSource.getRepository(Producto_1.Producto);
                    return [4 /*yield*/, productosRepo.findOne({ where: { id: id } })];
                case 1:
                    pro = _c.sent();
                    if (pro) {
                        return [2 /*return*/, resp.status(400).json({ mensaje: "El producto ya existre en la base de datos" })];
                    }
                    fecha = new Date();
                    producto = new Producto_1.Producto();
                    producto.id = id;
                    producto.nombre = nombre;
                    producto.precio = precio;
                    producto.stock = stock;
                    producto.fechaIngreso = fecha;
                    producto.estado = true;
                    return [4 /*yield*/, productosRepo.save(producto)];
                case 2:
                    _c.sent();
                    return [2 /*return*/, resp.status(201).json({ mensaje: "Producto creado" })];
                case 3:
                    error_4 = _c.sent();
                    return [2 /*return*/, resp.status(400).json({ mensaje: error_4 })];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    ProductosController.update = function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
        var _b, id, nombre, precio, stock, fechaIngreso, productosRepo, pro, error_5, error_6;
        return __generator(_a, function (_c) {
            switch (_c.label) {
                case 0:
                    _b = req.body, id = _b.id, nombre = _b.nombre, precio = _b.precio, stock = _b.stock, fechaIngreso = _b.fechaIngreso;
                    // validacion de datos de entrada
                    if (!id) {
                        return [2 /*return*/, resp.status(400).json({ mensaje: "Debe indicar el ID" })];
                    }
                    if (!nombre) {
                        return [2 /*return*/, resp.status(400).json({ mensaje: "Debe indicar un nombre" })];
                    }
                    if (!precio) {
                        return [2 /*return*/, resp.status(400).json({ mensaje: "Debe indicar el precio" })];
                    }
                    if (precio < 0) {
                        return [2 /*return*/, resp.status(400).json({ mensaje: "Debe indicar un precio mayor que 0" })];
                    }
                    if (!stock) {
                        return [2 /*return*/, resp.status(400).json({ mensaje: "Debe indicar el precio" })];
                    }
                    if (stock < 0) {
                        return [2 /*return*/, resp.status(400).json({ mensaje: "El stock debe ser mayor que 0" })];
                    }
                    productosRepo = data_source_1.AppDataSource.getRepository(Producto_1.Producto);
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, productosRepo.findOneOrFail({ where: { id: id } })];
                case 2:
                    pro = _c.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_5 = _c.sent();
                    return [2 /*return*/, resp.status(404).json({ mensaje: 'No existe el producto' })];
                case 4:
                    pro.nombre = nombre;
                    pro.precio = precio;
                    pro.stock = stock;
                    _c.label = 5;
                case 5:
                    _c.trys.push([5, 7, , 8]);
                    return [4 /*yield*/, productosRepo.save(pro)];
                case 6:
                    _c.sent();
                    return [2 /*return*/, resp.status(200).json({ mensaje: 'Se guardo correctamente.' })];
                case 7:
                    error_6 = _c.sent();
                    return [2 /*return*/, resp.status(400).json({ mensaje: 'No se pudo guardar.' })];
                case 8: return [2 /*return*/];
            }
        });
    }); };
    ProductosController.delete = function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
        var id, productosRepo, pro, error_7, error_8;
        return __generator(_a, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, , 9, 10]);
                    id = parseInt(req.params['id']);
                    // validacion de datos de entrada
                    if (!id) {
                        return [2 /*return*/, resp.status(400).json({ mensaje: "Debe indicar el ID" })];
                    }
                    productosRepo = data_source_1.AppDataSource.getRepository(Producto_1.Producto);
                    pro = void 0;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, productosRepo.findOneOrFail({ where: { id: id, estado: true } })];
                case 2:
                    pro = _b.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_7 = _b.sent();
                    return [2 /*return*/, resp.status(404).json({ mensaje: "No se encuentra el prodcuto con ese ID" })];
                case 4:
                    pro.estado = false;
                    _b.label = 5;
                case 5:
                    _b.trys.push([5, 7, , 8]);
                    return [4 /*yield*/, productosRepo.save(pro)];
                case 6:
                    _b.sent();
                    return [2 /*return*/, resp.status(200).json({ mensaje: "Se eliminó correctamente" })];
                case 7:
                    error_8 = _b.sent();
                    return [2 /*return*/, resp.status(400).json({ mensaje: "No se pudo eliminar" })];
                case 8: return [3 /*break*/, 10];
                case 9: return [7 /*endfinally*/];
                case 10: return [2 /*return*/];
            }
        });
    }); };
    return ProductosController;
}());
//# sourceMappingURL=ProductosController.js.map