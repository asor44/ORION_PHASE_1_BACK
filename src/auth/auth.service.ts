import { HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/users/user.model';
import { UsersService } from 'src/users/users.service';

export class AuthService {
  constructor(
    @InjectModel(User)
    private usersService: UsersService,
  ) {}

  async login(userDto): Promise<User> {
    return await this.usersService.findOneByEmail(userDto.email);
  }

  async register(userDto): Promise<User> {
    try {
      if (
        userDto.firstName === undefined ||
        userDto.firstName === null ||
        userDto.firstName === ''
      ) {
        throw new HttpException(
          'First name is required',
          HttpStatus.BAD_REQUEST,
        );
      }
      if (
        userDto.lastName === undefined ||
        userDto.lastName === null ||
        userDto.lastName === ''
      ) {
        throw new HttpException(
          'Last name is required',
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
      return await this.usersService.create(userDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
