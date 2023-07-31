import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entities";
import { AppError } from "../errors/AppError";

const ensureUserExistsMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const userRepository = AppDataSource.getRepository(User);
    const userId = Number(req.params.id);

    if (!userId) {
        throw new AppError("User ID must be a number", 400);
    }

    const user = await userRepository.findOne({
        where: {
            id: userId,
        },
        relations: {
            contacts: true,
        },
    });

    if (!user) {
        throw new AppError("User not found", 404);
    }
    req.userById = user;

    return next();
};

export { ensureUserExistsMiddleware };
