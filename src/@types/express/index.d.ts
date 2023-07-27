import { Contact } from "../../entities/contacts.entities";
import { TUserResponse } from "../../interfaces/users.interfaces";

declare global {
    namespace Express {
        interface Request {
            userById: User;
            contactById: Contact;
            loggedUserId: number;
        }
    }
}
