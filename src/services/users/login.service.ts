import { TLoginRequest } from "../../interfaces/users.interfaces";
import { Repository } from "typeorm";
import { User } from "../../entities/user.entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/AppError";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";

const userLoginService = async (data: TLoginRequest) => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    const foundByEmail = await userRepository.findOneBy({ email: data.email });

    if (!foundByEmail) {
        throw new AppError("Invalid email or password", 403);
    }

    const correctPassword: boolean = await compare(
        data.password,
        foundByEmail.password
    );

    if (!correctPassword) {
        throw new AppError("Invalid email or password", 403);
    }

    const token: string = jwt.sign(
        {
            email: foundByEmail.email,
        },
        process.env.SECRET_KEY! || "secret",
        {
            expiresIn: process.env.EXPIRES_IN || "24h",
            subject: foundByEmail.id.toString(),
        }
    );

    return token;
};

export { userLoginService };
