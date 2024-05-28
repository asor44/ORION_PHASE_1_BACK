import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDto } from 'src/features/users/dto/user.dto';
import { User } from 'src/features/users/user.model';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() userDto: UserDto): Promise<User> {
    return await this.authService.register(userDto);
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
  async redirect(@Param() code: string) {
    return await this.authService.microsoftRedirect(code);
  }
}
