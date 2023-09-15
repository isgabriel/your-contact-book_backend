import { Router } from "express";
import {
    createUserController,
    deleteUserController,
    readUserController,
    retrieveUserController,
    updateUserController,
} from "../controllers/users.controllers";
import { userPatchSchema, userRequestSchema } from "../schemas/user.schema";
import { checkUserById } from "../middlewares/checkUserById.middleware";
import { ensureTokenIsValid } from "../middlewares/ensureTokenIsValid.middleware";
import { ensureUserIsOwner } from "../middlewares/ensureUserIsOwner.middleware";
import { ensureBodyIsValid } from "../middlewares/ensureBodyIsValid.middleware";
import { ensureEmailExists } from "../middlewares/ensureEmailExists.middleware";
import { ensureTelephoneExists } from "../middlewares/ensureTelephoneExists.middleware";

const usersRoute: Router = Router();

usersRoute.post(
    "",
    ensureBodyIsValid(userRequestSchema),
    ensureEmailExists,
    ensureTelephoneExists,
    createUserController
);

usersRoute.get("", ensureTokenIsValid, retrieveUserController);

usersRoute.get(
    "/:id",
    ensureTokenIsValid,
    ensureUserIsOwner,
    readUserController
);

usersRoute.patch(
    "/:id",
    checkUserById,
    ensureTokenIsValid,
    ensureUserIsOwner,
    ensureBodyIsValid(userPatchSchema),
    ensureEmailExists,
    ensureTelephoneExists,
    updateUserController
);

usersRoute.delete(
    "/:id",
    ensureTokenIsValid,
    ensureUserIsOwner,
    checkUserById,
    deleteUserController
);

export { usersRoute };
