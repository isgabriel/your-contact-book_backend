import { Router } from "express";
import { loginController } from "../controllers/login.controllers";

import { loginSchema } from "../schemas/login.schema";
import { ensureBodyIsValid } from "../middlewares/ensureBodyIsValid.middleware";

const loginRoute: Router = Router();

loginRoute.post("", ensureBodyIsValid(loginSchema), loginController);

export { loginRoute };
