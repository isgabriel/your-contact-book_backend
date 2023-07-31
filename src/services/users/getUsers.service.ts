import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entities";
import { noPasswordNoContactsUserSchema } from "../../schemas/users.schemas";

const getUsersService = async () => {
    const userRepository = AppDataSource.getRepository(User);

    const users = await userRepository.find();

    const noPasswordUsers = users.map((user) =>
        noPasswordNoContactsUserSchema.parse(user)
    );

    return noPasswordUsers;
};

export { getUsersService };
