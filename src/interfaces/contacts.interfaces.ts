import { z } from "zod";
import { userSchemaRequest } from "../schemas/users.schemas";

type TContactRequest = z.infer<typeof userSchemaRequest>;

export { TContactRequest };
