import { Repository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Contact, User } from "../entities";
import { AppDataSource } from "../data-source";
import { AppError } from "../error/error";
import "dotenv/config";

const checkContactUser = async (
    request: Request,
    response: Response,
    next: NextFunction
): Promise<Response | void> => {
    const contactRepository: Repository<Contact> =
        AppDataSource.getRepository(Contact);

    const contactId: number = parseInt(request.params.id);
    const userId: number = parseInt(response.locals.id);

    const contact: Contact | null = await contactRepository.findOne({
        where: {
            id: contactId,
        },
        relations: {
            user: true,
        },
    });

    if (!contact) {
        throw new AppError("Contact not found!", 404);
    }

    if (contact?.user.id !== userId) {
        throw new AppError("Insufficient permission", 403);
    }

    return next();
};

export { checkContactUser };
