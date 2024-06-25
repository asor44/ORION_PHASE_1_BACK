import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDto } from 'src/features/users/dto/user.dto';
import { User } from 'src/features/users/user.model';
import { RedirectQuery } from './interface';
import { UserLoginDto } from '../users/dto/user-login.dto';
import { Public } from '../../core/decorator/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('register')
  async register(@Body() userDto: UserDto): Promise<User> {
    return await this.authService.register(userDto);
  }
  @Public()
  @Post('login')
  async login(
    @Body() userLoginDto: UserLoginDto,
  ): Promise<{ access_token: string }> {
    return await this.authService.login(userLoginDto);
  }

  @Post('setNewPassword')
  async setNewPassword(@Body() userDto: UserDto): Promise<User> {
    return await this.authService.setNewPassword(userDto);
  }

  @Get('microsoft')
  async microsoftLogin() {
    return await this.authService.microsoftLogin();
  }

  @Get('redirect')
  async redirect(@Query() code: RedirectQuery) {
    console.log(code.code);
    return await this.authService.microsoftRedirect(code);
  }
}
