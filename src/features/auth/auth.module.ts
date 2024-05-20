import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { UsersService } from 'src/features/users/users.service';
import { Sequelize } from 'sequelize';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/features/users/user.model';
import { MailService } from 'src/features/mail/mail.service';

@Module({
  imports: [SequelizeModule.forFeature([User])],
  providers: [AuthService, UsersService, MailService],
  controllers: [AuthController],
  exports: [SequelizeModule],
})
export class AuthModule {}
