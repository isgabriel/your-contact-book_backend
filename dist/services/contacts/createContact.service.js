"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createContactService = void 0;
const contact_entities_1 = require("../../entities/contact.entities");
const data_source_1 = require("../../data-source");
const user_entities_1 = require("../../entities/user.entities");
const AppError_1 = require("../../errors/AppError");
const users_schemas_1 = require("../../schemas/users.schemas");
const createContactService = (payload, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const contactRepository = data_source_1.AppDataSource.getRepository(contact_entities_1.Contact);
    const userRepository = data_source_1.AppDataSource.getRepository(user_entities_1.User);
    const user = yield userRepository.findOneBy({ id: userId });
    if (!user) {
        throw new AppError_1.AppError("user not found", 404);
    }
    const contact = contactRepository.create(Object.assign(Object.assign({}, payload), { user: user }));
    yield contactRepository.save(contact);
    const serializedUser = users_schemas_1.noPasswordNoContactsUserSchema.parse(contact.user);
    const serializedContact = Object.assign(Object.assign({}, contact), { user: serializedUser });
    return serializedContact;
});
exports.createContactService = createContactService;
