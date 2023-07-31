import "express-async-errors";
import express, { Application } from "express";
import cors from "cors";

import { handleAppError } from "./errors/AppError";
import { userRoutes } from "./routes/user.routes";
import { contactRoutes } from "./routes/contact.routes";

const app: Application = express();

app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));

app.use("/users", userRoutes);
app.use("/contacts", contactRoutes);

app.use(handleAppError);

export default app;
