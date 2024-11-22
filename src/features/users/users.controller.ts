import { Controller, Get, Request } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.model';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return await this.usersService.findAll();
  }

  @Get()
  async findOne(@Request() req): Promise<User> {
    return await this.usersService.findOne(req.user.sub);
  }
  // @Post()
  // async create(@Body() userDto: UserDto): Promise<User> {
  //   return await this.usersService.create(userDto);
  // }

  //@Post('register')
}
