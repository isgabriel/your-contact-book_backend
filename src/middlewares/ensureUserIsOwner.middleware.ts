import { NextFunction, Request, Response } from "express";
import { AppError } from "../error/error";

const ensureUserIsOwner = async (
    request: Request,
    response: Response,
    next: NextFunction
): Promise<Response | void> => {
    const id: number = parseInt(response.locals.id);
    const idParams: number = parseInt(request.params.id);

    if (id === idParams) {
        return next();
    }
    throw new AppError("Insufficient permission", 403);
};

export { ensureUserIsOwner };
