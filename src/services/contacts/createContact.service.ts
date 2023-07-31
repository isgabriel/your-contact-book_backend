import { Repository } from "typeorm";
import { TContactRequest } from "../../interfaces/contacts.interfaces";
import { Contact } from "../../entities/contact.entities";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entities";
import { AppError } from "../../errors/AppError";
import { noPasswordNoContactsUserSchema } from "../../schemas/users.schemas";

const createContactService = async (
    payload: TContactRequest,
    userId: number
) => {
    const contactRepository: Repository<Contact> =
        AppDataSource.getRepository(Contact);

    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    const user = await userRepository.findOneBy({ id: userId });

    if (!user) {
        throw new AppError("user not found", 404);
    }

    const contact = contactRepository.create({ ...payload, user: user });

    await contactRepository.save(contact);

    const serializedUser = noPasswordNoContactsUserSchema.parse(contact.user);
    const serializedContact = { ...contact, user: serializedUser };

    return serializedContact;
};

export { createContactService };
