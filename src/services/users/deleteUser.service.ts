import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entities";

const deleteUserService = async (userId: number) => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    const deletedUser = userRepository.delete(userId);

    return deletedUser;
};

export { deleteUserService };
