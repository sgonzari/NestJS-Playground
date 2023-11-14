import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('signup')
    signup () {
        // Send it as application/json
        return {msg: 'Hello'}
    }
    
    @Post('signin')
    signin () {
        // Send it as text/html
        return 'I am signed in'
    }
}