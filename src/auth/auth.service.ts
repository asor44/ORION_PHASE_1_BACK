import { HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserDto } from 'src/users/dto/user.dto';
import { User } from 'src/users/user.model';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/users/users.service';

export class AuthService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
    private usersService: UsersService,
  ) {}

  // async login(userDto): Promise<User> {
  //   return await this.usersService.findOneByEmail(userDto.email);
  // }

  async register(userDto: UserDto): Promise<User> {
    try {
      if (
        userDto.identifiant === undefined ||
        userDto.identifiant === null ||
        userDto.identifiant === ''
      ) {
        throw new HttpException(
          'Identifiant is required',
          HttpStatus.BAD_REQUEST,
        );
      }
      if (
        userDto.email === undefined ||
        userDto.email === null ||
        userDto.email === ''
      ) {
        throw new HttpException('Email is required', HttpStatus.BAD_REQUEST);
      } else if (userDto.email) {
        const emailRegex = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
        if (!emailRegex.test(userDto.email)) {
          throw new HttpException('Email is not valid', HttpStatus.BAD_REQUEST);
        }
      }
      const existingUser = await this.usersService.findOneByEmail(
        userDto.email,
      );
      if (existingUser) {
        throw new HttpException('Email already exists', HttpStatus.BAD_REQUEST);
      }
      // const saltRounds = 10;
      // const salt = bcrypt.genSaltSync(saltRounds);
      // const hash = await bcrypt.hash(userDto.password, salt);
      return await this.userModel.create({
        ...userDto,
      });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
