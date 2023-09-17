import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { UserDto } from './dto/user.dto';
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

  async create(userDto: UserDto): Promise<User> {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
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
        const existingUser = await this.findOneByEmail(userDto.email);
        if (existingUser) {
          throw new HttpException(
            'Email already exists',
            HttpStatus.BAD_REQUEST,
          );
        }
        if (
          userDto.password === undefined ||
          userDto.password === null ||
          userDto.password === ''
        ) {
          throw new HttpException(
            'Password is required',
            HttpStatus.BAD_REQUEST,
          );
        } else if (!passwordRegex.test(userDto.password)) {
          throw new HttpException(
            'Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number and one special character',
            HttpStatus.BAD_REQUEST,
          );
        }
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(userDto.password, salt);
        return await this.userModel.create({
          ...userDto,
          password: hash,
        });
      }
    } catch (error) {
      throw error;
    }
  }
}
