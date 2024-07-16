import {
  IsBoolean,
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { Right } from '../../rights/right.model';

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
  @IsNotEmpty()
  @IsString()
  password: string;
  @IsNotEmpty()
  @IsString()
  birthdate: string;
  @IsNotEmpty()
  @IsString()
  city: string;
  @IsNotEmpty()
  @IsString()
  address: string;
  @IsNotEmpty()
  @IsString()
  phone: string;
  @IsNotEmpty()
  @IsString()
  postalCode: string;
  @IsNotEmpty()
  @IsString()
  country: string;
  @IsString()
  army: string;
  @IsNotEmpty()
  @IsBoolean()
  reserve: boolean;
  @IsString()
  nid: string;
  @IsString()
  grade: string;
  @IsString()
  poste: string;
  @IsBoolean()
  cotisation: boolean;
  @IsBoolean()
  member: boolean;
  @IsNotEmpty()
  right: Right;
}
