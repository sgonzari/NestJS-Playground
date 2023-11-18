import { Module } from "@nestjs/common";
import { AuthController } from "./controllers/auth.controller";
import { USER_SERVICE } from "src/user/interfaces/user.interface";
import UserService from "src/user/services/user.service";
import { CqrsModule } from "@nestjs/cqrs";


@Module({
    imports: [CqrsModule],
    controllers: [AuthController],
    providers: [
        {
            provide: USER_SERVICE,
            useClass: UserService
        },
    ]
})
export class AuthModule { }
