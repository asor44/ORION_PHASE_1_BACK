import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { UserDto } from './dto/user.dto';
import { typeDto } from 'src/types/type.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  async findOne(id: number): Promise<User> {
    return await this.userModel.findOne({ where: { id } });
  }

  async findOneByEmail(email: string): Promise<User> {
    return this.userModel.findOne({ where: { email } });
  }

  // async create(userDto: UserDto): Promise<User> {
  //   const passwordRegex =
  //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  //   const phoneRegex = /^((\+)33|0)[1-9](\d{2}){4}$/;
  //   const emailRegex = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
  //   const postalCodeRegex = /^(?:0[1-9]|[1-8]\d|9[0-8])\d{3}$/;
  //   try {
  //     if (
  //       userDto.firstName === undefined ||
  //       userDto.firstName === null ||
  //       userDto.firstName === ''
  //     ) {
  //       throw new HttpException(
  //         'First name is required',
  //         HttpStatus.BAD_REQUEST,
  //       );
  //     }
  //     if (
  //       userDto.lastName === undefined ||
  //       userDto.lastName === null ||
  //       userDto.lastName === ''
  //     ) {
  //       throw new HttpException(
  //         'Last name is required',
  //         HttpStatus.BAD_REQUEST,
  //       );
  //     }
  //     if (
  //       userDto.email === undefined ||
  //       userDto.email === null ||
  //       userDto.email === ''
  //     ) {
  //       throw new HttpException('Email is required', HttpStatus.BAD_REQUEST);
  //     } else if (userDto.email) {
  //       if (!emailRegex.test(userDto.email)) {
  //         throw new HttpException(
  //           'Email must be a valid email',
  //           HttpStatus.BAD_REQUEST,
  //         );
  //       }
  //       const existingUser = await this.findOneByEmail(userDto.email);
  //       if (existingUser) {
  //         throw new HttpException(
  //           'Email already exists',
  //           HttpStatus.BAD_REQUEST,
  //         );
  //       }
  //     }
  //     if (
  //       userDto.phone === undefined ||
  //       userDto.phone === null ||
  //       userDto.phone === ''
  //     ) {
  //       throw new HttpException('Phone is required', HttpStatus.BAD_REQUEST);
  //     } else if (userDto.phone) {
  //       if (!phoneRegex.test(userDto.phone)) {
  //         throw new HttpException(
  //           'Phone number must be a valid French phone number',
  //           HttpStatus.BAD_REQUEST,
  //         );
  //       }
  //     }
  //     if (
  //       userDto.city === undefined ||
  //       userDto.city === null ||
  //       userDto.city === ''
  //     ) {
  //       throw new HttpException('City is required', HttpStatus.BAD_REQUEST);
  //     } else if (userDto.city) {
  //       if (!isNaN(Number(userDto.city))) {
  //         throw new HttpException(
  //           'City must be a valid city name',
  //           HttpStatus.BAD_REQUEST,
  //         );
  //       }
  //     }
  //     if (userDto.postalCode === undefined || userDto.postalCode === null) {
  //       throw new HttpException(
  //         'Postal code is required',
  //         HttpStatus.BAD_REQUEST,
  //       );
  //     } else if (userDto.postalCode) {
  //       if (!postalCodeRegex.test(userDto.postalCode)) {
  //         throw new HttpException(
  //           'Postal code must be a valid French postal code',
  //           HttpStatus.BAD_REQUEST,
  //         );
  //       }
  //     }
  //     if (userDto.type === undefined || userDto.type === null) {
  //       throw new HttpException('Type is required', HttpStatus.BAD_REQUEST);
  //     } else if (userDto.type) {
  //       userDto.type = typeDto[1];
  //     }
  //     if (
  //       userDto.password === undefined ||
  //       userDto.password === null ||
  //       userDto.password === ''
  //     ) {
  //       throw new HttpException('Password is required', HttpStatus.BAD_REQUEST);
  //     } else if (!passwordRegex.test(userDto.password)) {
  //       throw new HttpException(
  //         'Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number and one special character',
  //         HttpStatus.BAD_REQUEST,
  //       );
  //     }
  //     const saltRounds = 10;
  //     const salt = bcrypt.genSaltSync(saltRounds);
  //     const hash = await bcrypt.hash(userDto.password, salt);
  //     console.log(userDto.password, hash);
  //     return await this.userModel.create({
  //       firstName: userDto.firstName,
  //       lastName: userDto.lastName,
  //       email: userDto.email,
  //       phone: userDto.phone,
  //       city: userDto.city,
  //       postalCode: userDto.postalCode,
  //       type: userDto.type,
  //       password: hash,
  //     });
  //   } catch (error) {
  //     throw error;
  //   }
  // }
}
