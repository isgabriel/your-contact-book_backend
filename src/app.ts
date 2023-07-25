import "reflect-metadata";
import "express-async-errors";
import express from "express";

import cors from "cors";
import { userRoutes } from "./routes/user.routes";
import { loginRoutes } from "./routes/login.routes";
import { contactRoutes } from "./routes/contact.routes";
import { handleAppError } from "./errors/AppError";

const app = express();

app.use(express.json());
app.use(cors({ origin: "http://127.0.0.1:5173" }));

app.use("/users", userRoutes);
app.use("/login", loginRoutes);
app.use("/contacts", contactRoutes);

app.get("/", (req, res) => {
    return res.json("hello world");
});

app.use(handleAppError);

export default app;
