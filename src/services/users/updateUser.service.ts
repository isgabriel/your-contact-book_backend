import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entities";
import {
    noPasswordNoContactsUserSchema,
    userSchemaResponse,
} from "../../schemas/users.schemas";
import { TUserPatch, TUserResponse } from "../../interfaces/users.interfaces";

const updateUserService = async (
    payload: TUserPatch,
    id: number
): Promise<TUserResponse> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    const oldData: User | null = await userRepository.findOneBy({
        id: id,
    });

    const { ...userDataId } = payload;

    const user: User = userRepository.create({
        ...oldData,
        ...userDataId,
    });
    await userRepository.save(user);

    const parse: TUserResponse = userSchemaResponse.parse(user);
    return parse;

    // const updatedUser = userRepository.create({
    //     ...oldData,
    //     ...payload,
    // });

    // await userRepository.save(updatedUser);

    // const serializedUser = noPasswordNoContactsUserSchema.parse(updatedUser);

    // return serializedUser;
};

export { updateUserService };
