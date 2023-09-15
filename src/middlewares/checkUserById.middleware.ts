import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { User } from "../entities";
import { AppDataSource } from "../data-source";
import { AppError } from "../error/error";

const checkUserById = async (
    request: Request,
    response: Response,
    next: NextFunction
): Promise<Response | void> => {
    const id: number = Number(request.params.id);

    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    const user: User | null = await userRepository.findOneBy({
        id: id,
    });

    if (!user) {
        throw new AppError("User not found", 404);
    }

    return next();
};

export { checkUserById };
