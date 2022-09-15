"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = __importDefault(require("../controllers/UserController"));
const validadeUserCreate_middleware_1 = require("../middlewares/validadeUserCreate.middleware");
const routes = (0, express_1.Router)();
routes.post("/users", (0, validadeUserCreate_middleware_1.validateUserCreate)(validadeUserCreate_middleware_1.userCreateSchema), UserController_1.default.createUser); // Criação de usuário
routes.get("/users", UserController_1.default.getAllUsers); // Lista todos os usuários
routes.get("/users/:id", UserController_1.default.getOneUser); // Retorna os dados de um usuário
routes.patch("/users/:id", UserController_1.default.updateUserInformation); // Atualiza os dados de um usuário
routes.delete("/users/:id", UserController_1.default.deleteUser); //Deleta um usuário do banco
exports.default = routes;
