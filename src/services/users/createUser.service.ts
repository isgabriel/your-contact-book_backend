import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entities";
import { TUserRequest, TUserResponse } from "../../interfaces/users.interfaces";
import { noPasswordNoContactsUserSchema } from "../../schemas/users.schemas";

const createUserService = async (
    data: TUserRequest
): Promise<TUserResponse> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    const user = userRepository.create(data);
    await userRepository.save(user);

    const serializerUser = noPasswordNoContactsUserSchema.parse(user);

    return serializerUser;
};

export { createUserService };
