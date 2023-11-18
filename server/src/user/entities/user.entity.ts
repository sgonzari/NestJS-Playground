import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export enum UserRoles {
    admin = 'admin',
    mod = 'mod',
    user = 'user'
}

@Entity('user')
export class UserEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        name: 'first_name' // Nombre de la columna de base de datos
    })
    firstName: string; // Nombre a usar en código

    @Column({
        name: 'last_name'
    })
    lastName: string;

    @Column()
    userName: string;

    @Column({
        type: 'simple-array',
        default: UserRoles.user
    })
    role: UserRoles;

    @Column()
    password: string;

    @CreateDateColumn({
        name: 'created_at',
    })
    createdAt: Date;

    @UpdateDateColumn({
        name: 'updated_at',
    })
    updatedAt: Date;
}