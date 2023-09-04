"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const AppError_1 = require("./errors/AppError");
const user_routes_1 = require("./routes/user.routes");
const contact_routes_1 = require("./routes/contact.routes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({ origin: "http://localhost:5173" }));
app.use("/users", user_routes_1.userRoutes);
app.use("/contacts", contact_routes_1.contactRoutes);
app.use(AppError_1.handleAppError);
exports.default = app;
