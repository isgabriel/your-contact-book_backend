"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureTokenIsValidMiddleware = void 0;
const AppError_1 = require("../errors/AppError");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const ensureTokenIsValidMiddleware = (req, res, next) => {
    let token = req.headers.authorization;
    if (!token) {
        throw new AppError_1.AppError("Authorization token is required", 401);
    }
    token = token === null || token === void 0 ? void 0 : token.split(" ")[1];
    jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY || "secret", (error, decoded) => {
        if (error) {
            throw new AppError_1.AppError("Invalid authorization token", 401);
        }
        req.loggedUserId = parseInt(decoded.sub);
        return next();
    });
};
exports.ensureTokenIsValidMiddleware = ensureTokenIsValidMiddleware;
