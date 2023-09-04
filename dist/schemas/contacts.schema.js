"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactUpdateSchema = exports.contactSchemaRequest = exports.noUserContactSchema = exports.contactSchema = exports.phoneRegex = void 0;
const zod_1 = require("zod");
const users_schemas_1 = require("./users.schemas");
const phoneRegex = /^\+\d{2}\s\d{2}\s\d{9}$/;
exports.phoneRegex = phoneRegex;
const contactSchema = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string().max(256),
    email: zod_1.z.string().email().max(256),
    phone: zod_1.z
        .string()
        .max(20)
        .regex(phoneRegex, "Invalid phone number, must be like: +00 00 000000000"),
    registerDate: zod_1.z.string(),
    user: users_schemas_1.noPasswordNoContactsUserSchema,
});
exports.contactSchema = contactSchema;
const noUserContactSchema = contactSchema.omit({ user: true });
exports.noUserContactSchema = noUserContactSchema;
const contactSchemaRequest = noUserContactSchema.omit({
    id: true,
    registerDate: true,
});
exports.contactSchemaRequest = contactSchemaRequest;
const contactUpdateSchema = contactSchemaRequest.partial();
exports.contactUpdateSchema = contactUpdateSchema;
