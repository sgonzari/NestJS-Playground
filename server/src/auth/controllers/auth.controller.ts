import { Body, Controller, Inject, Post } from "@nestjs/common";
import SignUpDto from "../dtos/signup.dto";
import UserService from "src/user/services/user.service";
import { USER_SERVICE } from "src/user/interfaces/user.interface";

@Controller('auth')
export class AuthController {
    constructor (
        @Inject(USER_SERVICE)
        private userService: UserService,
    ) {}

    @Post('sign-up')
    async signUp (@Body() dto: SignUpDto) {
        this.userService.createUser({
            firstName: dto.firstName,
            lastName: dto.lastName,
            userName: dto.userName,
            role: dto.role,
            password: dto.password
        });

        return {
            message: 'OK'
        }
    }
}