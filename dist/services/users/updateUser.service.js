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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserService = void 0;
const data_source_1 = require("../../data-source");
const user_entities_1 = require("../../entities/user.entities");
const users_schemas_1 = require("../../schemas/users.schemas");
const updateUserService = (payload, id) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = data_source_1.AppDataSource.getRepository(user_entities_1.User);
    const oldData = yield userRepository.findOneBy({
        id: id,
    });
    const userDataId = __rest(payload, []);
    const user = userRepository.create(Object.assign(Object.assign({}, oldData), userDataId));
    yield userRepository.save(user);
    const parse = users_schemas_1.userSchemaResponse.parse(user);
    return parse;
    // const updatedUser = userRepository.create({
    //     ...oldData,
    //     ...payload,
    // });
    // await userRepository.save(updatedUser);
    // const serializedUser = noPasswordNoContactsUserSchema.parse(updatedUser);
    // return serializedUser;
});
exports.updateUserService = updateUserService;
