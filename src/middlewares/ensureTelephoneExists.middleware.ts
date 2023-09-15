import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { User } from "../entities";
import { AppDataSource } from "../data-source";
import { AppError } from "../error/error";

const ensureTelephoneExists = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const userRepo: Repository<User> = AppDataSource.getRepository(User);
    const telephone: string = req.body.telephone;

    if (telephone) {
        const checkTelephone: User | null = await userRepo.findOne({
            where: {
                telephone: telephone,
            },
            withDeleted: true,
        });
        if (checkTelephone) {
            if (
                req.method === "PATCH" &&
                checkTelephone.telephone === telephone
            ) {
                return next();
            }
            throw new AppError("Telephone already exists", 409);
        }
    }
    return next();
};

export { ensureTelephoneExists };
