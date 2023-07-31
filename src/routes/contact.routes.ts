import { Router } from "express";
import { ensureDataIsValid } from "../middlewares/ensureDataIsValid.middleware";
import {
    contactSchemaRequest,
    contactUpdateSchema,
} from "../schemas/contacts.schema";
import { ensureTokenIsValidMiddleware } from "../middlewares/ensureTokenIsValid.middleware";
import {
    createContactController,
    deleteContactController,
    retrieveContactController,
    updateContactController,
} from "../controllers/contacts.controllers";
import { ensureContactExistsMiddleware } from "../middlewares/ensureContactExists.middleware";
import { hasContactMiddleware } from "../middlewares/hasContact.middleware";

const contactRoutes = Router();

contactRoutes.post(
    "",
    ensureDataIsValid(contactSchemaRequest),
    ensureTokenIsValidMiddleware,
    createContactController
);
contactRoutes.get(
    "/:id",
    ensureContactExistsMiddleware,
    ensureTokenIsValidMiddleware,
    hasContactMiddleware,
    retrieveContactController
);
contactRoutes.patch(
    "/:id",
    ensureDataIsValid(contactUpdateSchema),
    ensureContactExistsMiddleware,
    ensureTokenIsValidMiddleware,
    hasContactMiddleware,
    updateContactController
);
contactRoutes.delete(
    "/:id",
    ensureContactExistsMiddleware,
    ensureTokenIsValidMiddleware,
    hasContactMiddleware,
    deleteContactController
);

export { contactRoutes };
