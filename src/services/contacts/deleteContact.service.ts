import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entities";

const deleteContactService = async (contactId: number) => {
    const contactRepository = AppDataSource.getRepository(Contact);

    const deletedContact = contactRepository.delete(contactId);

    return deletedContact;
};

export { deleteContactService };
