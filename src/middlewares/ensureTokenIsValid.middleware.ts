import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";
import jwt from "jsonwebtoken";

const ensureTokenIsValidMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    let token: string | undefined = req.headers.authorization;

    if (!token) {
        throw new AppError("Authorization token is required", 401);
    }

    token = token?.split(" ")[1];

    jwt.verify(
        token,
        process.env.SECRET_KEY! || "secret",
        (error: unknown, decoded: any) => {
            if (error) {
                throw new AppError("Invalid authorization token", 401);
            }
            req.loggedUserId = parseInt(decoded.sub);
            return next();
        }
    );
};

export { ensureTokenIsValidMiddleware };
