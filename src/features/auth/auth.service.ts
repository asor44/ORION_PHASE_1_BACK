import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserDto } from 'src/features/users/dto/user.dto';
import { User } from 'src/features/users/user.model';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/features/users/users.service';
import { MailService } from 'src/features/mail/mail.service';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import 'dotenv/config';
import { Observable } from 'rxjs';
import { RedirectQuery } from './interface';
import { UserLoginDto } from '../users/dto/user-login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
    private usersService: UsersService,
    private jwtService: JwtService,
    private mailService: MailService,
    private readonly httpService: HttpService,
  ) {}

  async login(userLoginDto: UserLoginDto): Promise<{ access_token: string }> {
    try {
      const existingUser = await this.userModel.findOne({
        where: { email: userLoginDto.email },
      });

      if (!existingUser) {
        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
      }

      const verifyPassword = await bcrypt.compare(
        userLoginDto.password,
        existingUser.password,
      );

      if (!verifyPassword) {
        throw new HttpException('Password incorrect', HttpStatus.BAD_REQUEST);
      }

      const payload = {
        sub: existingUser.id,
        firstName: existingUser.firstname,
        lastName: existingUser.lastname,
      };
      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async setNewPassword(userDto: UserDto): Promise<User> {
    const user = await this.usersService.findOneByEmail(userDto.email);
    try {
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
      const existingUser = await this.usersService.findOneByEmail(
        userDto.email,
      );
      if (existingUser) {
        throw new HttpException('Email already exists', HttpStatus.BAD_REQUEST);
      }
      const saltRounds = 10;
      const salt = bcrypt.genSaltSync(saltRounds);
      const hash = await bcrypt.hashSync(userDto.password, salt);
      return await this.userModel.create({
        firstname: userDto.firstName,
        lastname: userDto.lastName,
        email: userDto.email,
        password: hash,
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

  async microsoftRedirect(
    code: RedirectQuery,
  ): Promise<Observable<AxiosResponse<any, any>>> {
    const clientId = process.env.CLIENT_ID;
    const redirectUri = process.env.REDIRECT_URI;
    const baseUri = process.env.REDIRECT_BASE_URL;
    try {
      const response = await this.httpService.axiosRef.post(
        `https://login.microsoftonline.com/consumers/oauth2/v2.0/token`,
        {
          grant_type: 'authorization_code',
          code: code,
          client_id: clientId,
          redirect_uri: redirectUri,
        },
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      );
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
