import { HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserDto } from 'src/features/users/dto/user.dto';
import { User } from 'src/features/users/user.model';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/features/users/users.service';
import { MailService } from 'src/features/mail/mail.service';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import 'dotenv/config';

export class AuthService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
    private usersService: UsersService,
    private mailService: MailService,
    private readonly httpService: HttpService,
  ) {}

  // async login(userDto): Promise<User> {
  //   return await this.usersService.findOneByEmail(userDto.email);
  // }

  async setNewPassword(userDto: UserDto): Promise<User> {
    const user = await this.usersService.findOneByEmail(userDto.email);
    try {
      if (
        userDto.password === undefined ||
        userDto.password === null ||
        userDto.password === ''
      ) {
        throw new HttpException('Password is required', HttpStatus.BAD_REQUEST);
      }
      const saltRounds = 10;
      const salt = bcrypt.genSaltSync(saltRounds);
      const hash = await bcrypt.hash(userDto.password, salt);
      await user.update({ password: hash });
      return {
        ...user,
        password: hash,
      } as User;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

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
      this.mailService.sendEmail(userDto.email, userDto.identifiant);
      return await this.userModel.create({
        ...userDto,
      });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async microsoftLogin(): Promise<AxiosResponse> {
    const baseUrl = process.env.BASE_URL;
    const scopes = process.env.SCOPES;
    const tenant = process.env.TENANT_ID;
    const clientId = process.env.CLIENT_ID;
    const redirectUri = process.env.REDIRECT_URI;
    const codeChallenge = process.env.CODE_CHALLENGE;
    const codeChallengeMethod = process.env.CODE_CHALLENGE_METHOD;
    try {
      const uri = `${baseUrl}?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&response_mode=query&scope=${scopes}&state=12345&code_challenge=${codeChallenge}&code_challenge_method=${codeChallengeMethod}`;
      const response = await this.httpService.axiosRef.get(uri);
      console.log(uri);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async microsoftRedirect(code: string): Promise<AxiosResponse> {
    const clientId = process.env.CLIENT_ID;
    const clientSecret = process.env.CLIENT_SECRET;
    const scopes = process.env.SCOPES;
    const redirectUri = process.env.REDIRECT_URI;
    try {
      const response = await this.httpService.axiosRef.post(
        `https://login.microsoftonline.com/consumers/oauth2/v2.0/token`,
        {
          client_id: clientId,
          scope: scopes,
          code: code,
          redirect_uri: redirectUri,
          grant_type: 'authorization_code',
          client_secret: clientSecret,
        },
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
