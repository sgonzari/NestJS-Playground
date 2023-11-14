import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('signup')
    signup (@Body() body: AuthDto) {
        console.log({
            body,
        });
        
        return this.authService.signup()
    }
    
    @Post('login')
    signin () {
        return this.authService.login()
    }
}