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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const deleteUser_service_1 = __importDefault(require("../services/user/deleteUser.service"));
const userCreate_service_1 = __importDefault(require("../services/user/userCreate.service"));
const userListOne_service_1 = __importDefault(require("../services/user/userListOne.service"));
const usersList_service_1 = __importDefault(require("../services/user/usersList.service"));
const userUpdate_service_1 = __importDefault(require("../services/user/userUpdate.service"));
class UserController {
    static createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, email, password, age } = req.newUser;
                const newUser = yield (0, userCreate_service_1.default)({ name, email, password, age });
                return res.status(201).send(newUser);
            }
            catch (err) {
                if (err instanceof Error) {
                    return res.status(400).send({
                        error: err.name,
                        message: err.message,
                    });
                }
            }
        });
    }
    static getAllUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield (0, usersList_service_1.default)();
                return res.json(users);
            }
            catch (err) {
                if (err instanceof Error) {
                    return res.status(400).send({
                        error: err.name,
                        message: err.message,
                    });
                }
            }
        });
    }
    static getOneUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const user = yield (0, userListOne_service_1.default)({ id });
                return res.status(200).send(user);
            }
            catch (err) {
                if (err instanceof Error) {
                    return res.status(401).send({
                        error: err.name,
                        message: err.message,
                    });
                }
            }
        });
    }
    static updateUserInformation(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { name, email, password, age } = req.body;
            try {
                const user = yield (0, userUpdate_service_1.default)({
                    id,
                    name,
                    email,
                    password,
                    age,
                });
                return res.status(201).json({ message: "User updated with success!" });
            }
            catch (err) {
                if (err instanceof Error) {
                    return res.status(400).send({
                        error: err.name,
                        message: err.message,
                    });
                }
            }
        });
    }
    static deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const userDeleted = yield (0, deleteUser_service_1.default)(id);
                return res.json({
                    message: "User Deleted",
                });
            }
            catch (err) {
                if (err instanceof Error) {
                    return res.status(400).send({
                        error: err.name,
                        message: err.message,
                    });
                }
            }
        });
    }
}
exports.default = UserController;
