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
exports.getUserContactsService = void 0;
const contact_entities_1 = require("../../entities/contact.entities");
const data_source_1 = require("../../data-source");
const getUserContactsService = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const contactRepository = data_source_1.AppDataSource.getRepository(contact_entities_1.Contact);
    const contacts = yield contactRepository.find({
        where: {
            user: {
                id: userId,
            },
        },
    });
    contactRepository.save(contacts);
    return contacts;
});
exports.getUserContactsService = getUserContactsService;
