import { Request, Response } from "express";
import { createUserService } from "../services/users/createUser.service";
import { userLoginService } from "../services/users/login.service";
import { getUsersService } from "../services/users/getUsers.service";
import { updateUserService } from "../services/users/updateUser.service";
import { deleteUserService } from "../services/users/deleteUser.service";

const createUserController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const newUser = await createUserService(req.body);

    return res.status(201).json(newUser);
};
const userLoginController = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const token = await userLoginService({ email, password });

    return res.json({ token });
};

const listUsersController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const usersList = await getUsersService();

    return res.status(200).json(usersList);
};

const retrieveUsersController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const user = req.userById;
    return res.status(200).json(user);
};

const updateUserController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const updateUser = await updateUserService(req.body, req.userById);

    return res.status(200).json(updateUser);
};

const deleteUserController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    // const userId = Number(req.params.id);
    const deletedUser = await deleteUserService(Number(req.params.id));

    return res.status(204).send();
};

export {
    createUserController,
    userLoginController,
    listUsersController,
    retrieveUsersController,
    updateUserController,
    deleteUserController,
};
