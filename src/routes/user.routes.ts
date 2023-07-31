import { Router } from "express";

import {
    createUserController,
    deleteUserController,
    listUsersController,
    retrieveUsersController,
    updateUserController,
    userLoginController,
} from "../controllers/users.controllers";
import {
    getLoggedUserController,
    getUserContactsController,
} from "../controllers/contacts.controllers";

import {
    userLoginSchema,
    userSchemaRequest,
    userUpdateSchema,
} from "../schemas/users.schemas";

import { ensureDataIsValid } from "../middlewares/ensureDataIsValid.middleware";
import { ensureIsAccountOwnerMiddleware } from "../middlewares/ensureIsAccountOwnerMiddleware.middleware";
import { ensureTokenIsValidMiddleware } from "../middlewares/ensureTokenIsValid.middleware";
import { checkIfUserEmailIsExistsMiddleware } from "../middlewares/checkIfUserEmailIsExists.middleware";
import { ensureUserExistsMiddleware } from "../middlewares/ensureUserExists.middleware";

const userRoutes = Router();

userRoutes.post(
    "/register",
    ensureDataIsValid(userSchemaRequest),
    checkIfUserEmailIsExistsMiddleware,
    createUserController
);
userRoutes.post(
    "/login",
    ensureDataIsValid(userLoginSchema),
    userLoginController
);

userRoutes.get("", listUsersController);
userRoutes.get("/:id", ensureUserExistsMiddleware, retrieveUsersController);
userRoutes.get(
    "/dashboard/:id",
    ensureUserExistsMiddleware,
    ensureTokenIsValidMiddleware,
    ensureIsAccountOwnerMiddleware,
    getLoggedUserController
);
userRoutes.get(
    "/:id/contacts",
    ensureUserExistsMiddleware,
    ensureTokenIsValidMiddleware,
    ensureIsAccountOwnerMiddleware,
    getUserContactsController
);

userRoutes.patch(
    "/:id",
    ensureUserExistsMiddleware,
    ensureTokenIsValidMiddleware,
    ensureIsAccountOwnerMiddleware,
    ensureDataIsValid(userUpdateSchema),
    updateUserController
);

userRoutes.delete(
    "/:id",
    ensureUserExistsMiddleware,
    ensureTokenIsValidMiddleware,
    ensureIsAccountOwnerMiddleware,
    deleteUserController
);

export { userRoutes };
