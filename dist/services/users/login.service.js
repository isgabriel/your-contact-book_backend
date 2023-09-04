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
exports.userLoginService = void 0;
const user_entities_1 = require("../../entities/user.entities");
const data_source_1 = require("../../data-source");
const AppError_1 = require("../../errors/AppError");
const bcryptjs_1 = require("bcryptjs");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userLoginService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = data_source_1.AppDataSource.getRepository(user_entities_1.User);
    const foundByEmail = yield userRepository.findOneBy({ email: data.email });
    if (!foundByEmail) {
        throw new AppError_1.AppError("Invalid email or password", 403);
    }
    const correctPassword = yield (0, bcryptjs_1.compare)(data.password, foundByEmail.password);
    if (!correctPassword) {
        throw new AppError_1.AppError("Invalid email or password", 403);
    }
    const token = jsonwebtoken_1.default.sign({
        email: foundByEmail.email,
    }, process.env.SECRET_KEY || "secret", {
        expiresIn: process.env.EXPIRES_IN || "24h",
        subject: foundByEmail.id.toString(),
    });
    return token;
});
exports.userLoginService = userLoginService;
