import { z } from "zod";
import { noUserContactSchema, phoneRegex } from "./contacts.schema";

const userSchema = z.object({
    id: z.number(),
    name: z.string().min(3).max(126),
    email: z.string().email().max(126),
    password: z
        .string()
        .min(6)
        .max(126)
        .regex(
            /^(?=.*[a-z])(?=.*[A-Z])/g,
            "The password must include at least one upper case and one lower case character"
        ),
    phone: z
        .string()
        .max(20)
        .regex(
            phoneRegex,
            "Invalid phone number, must be like: +00 00 000000000"
        ),
    registerDate: z.string(),
    contacts: z.array(noUserContactSchema),
});

const userSchemaRequest = userSchema.omit({
    id: true,
    registerDate: true,
    contacts: true,
});

const userLoginSchema = userSchemaRequest.omit({
    name: true,
    phone: true,
});

const userUpdateSchema = userSchemaRequest.partial();
const userSchemaResponse = userSchema.omit({
    password: true,
});
const noPasswordNoContactsUserSchema: any = userSchemaResponse.omit({
    contacts: true,
});

export {
    userSchema,
    userSchemaRequest,
    userLoginSchema,
    userUpdateSchema,
    userSchemaResponse,
    noPasswordNoContactsUserSchema,
};
