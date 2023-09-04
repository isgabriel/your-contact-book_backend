"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noPasswordNoContactsUserSchema = exports.userSchemaResponse = exports.userUpdateSchema = exports.userLoginSchema = exports.userSchemaRequest = exports.userSchema = void 0;
const zod_1 = require("zod");
const contacts_schema_1 = require("./contacts.schema");
const userSchema = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string().min(3).max(126),
    email: zod_1.z.string().email().max(126),
    password: zod_1.z
        .string()
        .min(6)
        .max(126)
        .regex(/^(?=.*[a-z])(?=.*[A-Z])/g, "The password must include at least one upper case and one lower case character"),
    phone: zod_1.z
        .string()
        .max(20)
        .regex(contacts_schema_1.phoneRegex, "Invalid phone number, must be like: +00 00 000000000"),
    registerDate: zod_1.z.string(),
    contacts: zod_1.z.array(contacts_schema_1.noUserContactSchema).optional(),
});
exports.userSchema = userSchema;
const userSchemaRequest = userSchema.omit({
    id: true,
    registerDate: true,
    contacts: true,
});
exports.userSchemaRequest = userSchemaRequest;
const userLoginSchema = userSchemaRequest.omit({
    name: true,
    phone: true,
});
exports.userLoginSchema = userLoginSchema;
const userUpdateSchema = userSchemaRequest.partial();
exports.userUpdateSchema = userUpdateSchema;
const userSchemaResponse = userSchema.omit({
    password: true,
});
exports.userSchemaResponse = userSchemaResponse;
const noPasswordNoContactsUserSchema = userSchemaResponse.omit({
    contacts: true,
});
exports.noPasswordNoContactsUserSchema = noPasswordNoContactsUserSchema;
