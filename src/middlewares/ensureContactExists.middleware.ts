import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { Contact } from "../entities/contact.entities";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors/AppError";

const ensureContactExistsMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const contactRepository: Repository<Contact> =
        AppDataSource.getRepository(Contact);
    const contactId = Number(req.params.id);

    if (!contactId) {
        throw new AppError("Contact not found", 404);
    }

    const contact = await contactRepository.findOne({
        where: {
            id: contactId,
        },
        relations: {
            user: true,
        },
    });

    if (!contact) {
        throw new AppError("Contact not found", 404);
    }

    req.contactById = contact;

    return next();
};

export { ensureContactExistsMiddleware };
