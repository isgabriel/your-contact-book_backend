import { Router } from "express";
import {
    createContactController,
    deleteContactController,
    patchContactController,
    readContactController,
} from "../controllers/contacts.controllers";
import {
    contactSchemaPatch,
    contactSchemaRequest,
} from "../schemas/contact.schema";
import { checkContactUser } from "../middlewares/checkContactUser.middleware";
import { ensureBodyIsValid } from "../middlewares/ensureBodyIsValid.middleware";
import { ensureTokenIsValid } from "../middlewares/ensureTokenIsValid.middleware";

const contactRoutes: Router = Router();

contactRoutes.post(
    "",
    ensureTokenIsValid,
    ensureBodyIsValid(contactSchemaRequest),
    createContactController
);

contactRoutes.get("", ensureTokenIsValid, readContactController);

contactRoutes.patch(
    "/:id",
    ensureTokenIsValid,
    checkContactUser,
    ensureBodyIsValid(contactSchemaPatch),
    patchContactController
);

contactRoutes.delete(
    "/:id",
    ensureTokenIsValid,
    checkContactUser,
    deleteContactController
);

export { contactRoutes };
