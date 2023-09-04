"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("./data-source");
const app_1 = __importDefault(require("./app"));
data_source_1.AppDataSource.initialize()
    .then(() => {
    console.log("Database ruuning");
    const PORT = process.env.PORT || 3000;
    app_1.default.listen(PORT, () => {
        console.log(`Server is running on ${PORT}`);
    });
})
    .catch((error) => console.log(error));
