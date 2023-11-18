import { AggregateRoot } from "@nestjs/cqrs";
import { UserEntity, UserRoles } from "../entities/user.entity";

export class UserModel extends AggregateRoot {
    private readonly id: string;
    private firstName: string;
    private lastName: string;
    private userName: string;
    private role: UserRoles;
    private password: string;
    private createdAt: Date;
    private updatedAt: Date;

    constructor(
        id: string,
        firstName: string,
        lastName: string,
        userName: string,
        role: UserRoles,
        password: string,
        createdAt: Date,
        updatedAt: Date
    ) {
        super(); // Llama al constructor de la clase extendida

        this.id = id;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.setter(
            firstName,
            lastName,
            userName,
            role,
            password,
        );
    }

    private setter(
        firstName: string,
        lastName: string,
        userName: string,
        role: UserRoles,
        password: string,
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName;
        this.role = role;
        this.password = password;
    }

    static fromEntity(entity: UserEntity): UserModel {
        const {
            id,
            firstName,
            lastName,
            userName,
            role,
            password,
            createdAt,
            updatedAt
        } = entity;

        return new UserModel(
            id,
            firstName,
            lastName,
            userName,
            role,
            password,
            createdAt,
            updatedAt
        )
    }
}