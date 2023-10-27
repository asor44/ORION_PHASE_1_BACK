import { Module } from '@nestjs/common';
import { AppController } from './app/app.controller';
import { AppService } from './app/app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { DbDevConfig } from './database/config';
import 'dotenv/config';
import { UsersModule } from './users/users.module';
import { User } from './users/user.model';
import { Type } from './types/type.model';
import { Article } from './articles/article.model';
import { UserArticle } from './user-article/user-article.model';
import { Team } from './team/team.model';
import { UserTeam } from './user-team/user-team.model';
import { Right } from './rights/right.model';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      ...DbDevConfig,
      dialect: 'postgres',
      models: [User, Type, Article, UserArticle, Team, UserTeam, Right],
    }),
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
