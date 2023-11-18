import { IsNotEmpty, IsStrongPassword, MinLength } from "class-validator";
import { Match } from "src/common/decorators/match.decorator";

export default class PasswordDto {
    @IsNotEmpty()
    @MinLength(8)
    @IsStrongPassword()
    password: string;
    
    @IsNotEmpty()
    @MinLength(8)
    @IsStrongPassword()
    @Match('password', {
        message: 'Las contraseñas no son iguales.'
    })
    repeatPassword: string;
}