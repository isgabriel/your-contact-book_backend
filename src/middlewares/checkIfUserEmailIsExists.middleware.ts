import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entities";
import { AppError } from "../errors/AppError";

const checkIfUserEmailIsExistsMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const userRepository = AppDataSource.getRepository(User);

    const payload = req.body;

    const emailExists = await userRepository.exist({
        where: {
            email: payload.email,
        },
    });

    if (emailExists) {
        throw new AppError("Email already exists", 409);
    }

    return next();
};

export { checkIfUserEmailIsExistsMiddleware };
