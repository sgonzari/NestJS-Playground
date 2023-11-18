import { UserModel } from "../models/user.model";
import UserCreateInterface from "./user-create.interface";

export const USER_SERVICE = 'USER_SERVICE';

export default interface UserInterface {
    createUser(userData: UserCreateInterface): Promise<UserModel>;
}