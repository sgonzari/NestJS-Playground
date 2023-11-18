import { UserRoles } from "../entities/user.entity";

export default interface UserCreateInterface {
    firstName: string;
    lastName: string;
    userName: string;
    role: UserRoles;
    password: string;
}