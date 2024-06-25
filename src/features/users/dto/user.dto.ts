import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UserDto {
  id: number;
  @IsNotEmpty()
  @IsString()
  firstName: string;
  @IsNotEmpty()
  @IsString()
  lastName: string;
  @IsEmail()
  @IsNotEmpty()
  email: string;
  //@IsNotEmpty()
  //phone: string;
  @IsNotEmpty()
  @IsString()
  password: string;
}
