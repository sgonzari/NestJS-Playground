import { Injectable } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import UserInterface from "../interfaces/user.interface";
import UserCreateInterface from "../interfaces/user-create.interface";
import { UserModel } from "../models/user.model";

@Injectable()
export default class UserService implements UserInterface {
    constructor (
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus
    ) {}

    async createUser (userData: UserCreateInterface) : Promise<UserModel> {
        
        return null;
    }
}