import { Module } from '@nestjs/common';
import { AppController } from './app/app.controller';
import { AppService } from './app/app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import 'dotenv/config';
import * as config from './database/config.json';
import { UsersModule } from './users/users.module';
import { User } from './users/user.model';
import { Type } from './types/type.model';
import { Article } from './articles/article.model';
import { UserArticle } from './user-article/user-article.model';
import { Team } from './team/team.model';
import { UserTeam } from './user-team/user-team.model';
import { Right } from './rights/right.model';
import { AuthModule } from './auth/auth.module';
import { MailModule } from './mail/mail.module';

const DbDevConfig = config.development;

@Module({
  imports: [
    SequelizeModule.forRoot({
      ...DbDevConfig,
      dialect: 'postgres',
      models: [User, Type, Article, UserArticle, Team, UserTeam, Right],
      synchronize: true,
      autoLoadModels: true,
    }),
    UsersModule,
    AuthModule,
    MailModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
