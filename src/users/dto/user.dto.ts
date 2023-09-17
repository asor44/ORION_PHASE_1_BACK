import { IsEmail, IsNotEmpty } from 'class-validator';

export class UserDto {
  id: number;
  @IsNotEmpty()
  firstName: string;
  @IsNotEmpty()
  lastName: string;
  @IsEmail()
  email: string;
  @IsNotEmpty()
  password: string;
  isAdmin: boolean;
  isActive: boolean;
}
