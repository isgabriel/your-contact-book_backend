import { z } from "zod";
import {
    userSchema,
    userSchemaRequest,
    userSchemaResponse,
    userUpdateSchema,
} from "../schemas/users.schemas";
import { userLoginSchema } from "../schemas/users.schemas";

type TUser = z.infer<typeof userSchema>;
type TUserRequest = z.infer<typeof userSchemaRequest>;
type TUserResponse = z.infer<typeof userSchemaResponse>;
type TUserUpdate = z.infer<typeof userUpdateSchema>;

type TLoginRequest = z.infer<typeof userLoginSchema>;

export { TUser, TUserRequest, TUserResponse, TUserUpdate, TLoginRequest };
