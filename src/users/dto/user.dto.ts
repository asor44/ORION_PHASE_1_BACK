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
  phone: string;
  @IsNotEmpty()
  password: string;
  city: string;
  postalCode: string;
  type: string;
  army: string;
  rank: string;
  cotisation: boolean;
  rights: string;
  equipement: string;
  isActive: boolean;
  team: string;
  isDeleted: boolean;
}
