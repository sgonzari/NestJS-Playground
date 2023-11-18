import { IsIn, IsNotEmpty } from "class-validator";
import { UserRoles } from "src/user/entities/user.entity";
import PasswordDto from "./password.dto";

export default class SignUpDto extends PasswordDto {
    @IsNotEmpty()
    firstName: string;
    
    @IsNotEmpty()
    lastName: string;
    
    @IsNotEmpty()
    userName: string;

    @IsNotEmpty()
    @IsIn(Object.values(UserRoles))
    role: UserRoles;
}