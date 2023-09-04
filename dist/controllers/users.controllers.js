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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserController = exports.updateUserController = exports.retrieveUsersController = exports.listUsersController = exports.userLoginController = exports.createUserController = void 0;
const createUser_service_1 = require("../services/users/createUser.service");
const login_service_1 = require("../services/users/login.service");
const getUsers_service_1 = require("../services/users/getUsers.service");
const updateUser_service_1 = require("../services/users/updateUser.service");
const deleteUser_service_1 = require("../services/users/deleteUser.service");
const createUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = yield (0, createUser_service_1.createUserService)(req.body);
    return res.status(201).json(newUser);
});
exports.createUserController = createUserController;
const userLoginController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const token = yield (0, login_service_1.userLoginService)({ email, password });
    return res.json({ token });
});
exports.userLoginController = userLoginController;
const listUsersController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usersList = yield (0, getUsers_service_1.getUsersService)();
    return res.status(200).json(usersList);
});
exports.listUsersController = listUsersController;
const retrieveUsersController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.userById;
    return res.status(200).json(user);
});
exports.retrieveUsersController = retrieveUsersController;
const updateUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const updateUser = yield (0, updateUser_service_1.updateUserService)(req.body, id);
    return res.status(200).json(updateUser);
});
exports.updateUserController = updateUserController;
const deleteUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const userId = Number(req.params.id);
    yield (0, deleteUser_service_1.deleteUserService)(Number(req.params.id));
    return res.status(204).send();
});
exports.deleteUserController = deleteUserController;
