import { Request, Response } from "express";
import { getUserContactsService } from "../services/contacts/getUserContacts.service";

const getUserContactsController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const contacts = await getUserContactsService(Number(req.params.id));

    return res.status(200).json(contacts);
};

const getLoggedUserController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    return res.status(200).json(req.userById);
};

export { getUserContactsController, getLoggedUserController };
