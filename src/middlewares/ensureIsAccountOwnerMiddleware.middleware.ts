import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";

const ensureIsAccountOwnerMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (req.loggedUserId != req.userById.id) {
        throw new AppError(
            "You don't have permission to access this user",
            401
        );
    }
    return next();
};

export { ensureIsAccountOwnerMiddleware };
