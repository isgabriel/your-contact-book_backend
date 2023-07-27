import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError";

const hasContactMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (req.loggedUserId != req.contactById.user.id) {
        throw new AppError(
            "You do not have permission to access this contact",
            401
        );
    }
    return next();
};

export { hasContactMiddleware };
