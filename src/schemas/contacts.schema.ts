import { z } from "zod";
import { noPasswordNoContactsUserSchema } from "./users.schemas";

const phoneRegex = /^\+\d{2}\s\d{2}\s\d{9}$/;

const contactSchema: z.ZodObject<any> = z.object({
    id: z.number(),
    name: z.string().max(256),
    email: z.string().email().max(256),
    phone: z
        .string()
        .max(20)
        .regex(
            phoneRegex,
            "Invalid phone number, must be like: +00 00 000000000"
        ),
    registerDate: z.string(),
    user: noPasswordNoContactsUserSchema,
});

const noUserContactSchema = contactSchema.omit({ user: true });
const contactSchemaRequest = noUserContactSchema.omit({
    id: true,
    registerDate: true,
});

const contactUpdateSchema = contactSchemaRequest.partial();

export {
    phoneRegex,
    contactSchema,
    noUserContactSchema,
    contactSchemaRequest,
    contactUpdateSchema,
};
