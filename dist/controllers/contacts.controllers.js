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
exports.getLoggedUserController = exports.retrieveContactController = exports.deleteContactController = exports.updateContactController = exports.getUserContactsController = exports.createContactController = void 0;
const getUserContacts_service_1 = require("../services/contacts/getUserContacts.service");
const createContact_service_1 = require("../services/contacts/createContact.service");
const users_schemas_1 = require("../schemas/users.schemas");
const updateContact_service_1 = require("../services/contacts/updateContact.service");
const deleteContact_service_1 = require("../services/contacts/deleteContact.service");
const createContactController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const createdContact = yield (0, createContact_service_1.createContactService)(req.body, req.loggedUserId);
    return res.status(201).json(createdContact);
});
exports.createContactController = createContactController;
const getUserContactsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contacts = yield (0, getUserContacts_service_1.getUserContactsService)(Number(req.params.id));
    return res.status(200).json(contacts);
});
exports.getUserContactsController = getUserContactsController;
const updateContactController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedContact = yield (0, updateContact_service_1.updateContactService)(req.body, req.contactById);
    return res.status(201).json(updatedContact);
});
exports.updateContactController = updateContactController;
const deleteContactController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedContact = (0, deleteContact_service_1.deleteContactService)(Number(req.params.id));
    return res.status(204).json(deletedContact);
});
exports.deleteContactController = deleteContactController;
const retrieveContactController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contact = req.contactById;
    const serializedUser = users_schemas_1.noPasswordNoContactsUserSchema.parse(contact.user);
    const serializedContact = Object.assign(Object.assign({}, contact), { user: serializedUser });
    return res.status(200).json(serializedContact);
});
exports.retrieveContactController = retrieveContactController;
const getLoggedUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.status(200).json(req.userById);
});
exports.getLoggedUserController = getLoggedUserController;
