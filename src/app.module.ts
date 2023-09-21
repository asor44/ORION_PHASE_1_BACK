import { Module } from '@nestjs/common';
import { AppController } from './app/app.controller';
import { AppService } from './app/app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import 'dotenv/config';
import { UsersModule } from './users/users.module';
import { User } from './users/user.model';
import { Type } from './types/type.model';
import { Article } from './articles/article.model';
import { UserArticle } from './user-article/user-article.model';
import { Team } from './team/team.model';
import { UserTeam } from './user-team/user-team.model';
import { Right } from './rights/right.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      models: [User, Article, UserArticle, Team, UserTeam, Right, Type],
      autoLoadModels: true,
      synchronize: true,
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
