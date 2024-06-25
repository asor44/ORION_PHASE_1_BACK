import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersService } from 'src/features/users/users.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/features/users/user.model';
import { MailService } from 'src/features/mail/mail.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    SequelizeModule.forFeature([User]),
    HttpModule.registerAsync({
      useFactory: () => ({
        timeout: 5000,
        maxRedirects: 5,
      }),
    }),
  ],
  providers: [AuthService, UsersService, MailService],
  controllers: [AuthController],
  exports: [SequelizeModule],
})
export class AuthModule {}
