import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entities";
import { noPasswordNoContactsUserSchema } from "../../schemas/users.schemas";

const updateUserService = async (payload: object, oldData: User) => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    const updatedUser = userRepository.create({
        ...oldData,
        ...payload,
    });

    await userRepository.save(updatedUser);

    const serializedUser = noPasswordNoContactsUserSchema.parse(updatedUser);

    return serializedUser;
};

export { updateUserService };
