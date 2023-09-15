import express, { Application } from "express";
import "reflect-metadata";
import "express-async-errors";
import { errorHandle } from "./error/error";
import { usersRoute } from "./routes/users.routes";
import { loginRoute } from "./routes/login.routes";
import { contactRoutes } from "./routes/contacts.routes";
import cors from "cors";

const app: Application = express();

app.use(express.json());

app.use(cors({ origin: "https://your-contact-book.vercel.app" }));
// app.use(cors({ origin: "http://localhost:5173" }));

app.use("/users", usersRoute);

app.use("/login", loginRoute);

app.use("/contacts", contactRoutes);

app.use(errorHandle);

export default app;
