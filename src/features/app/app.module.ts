import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import 'dotenv/config';
import * as config from '../../../database/config.json';
import { UsersModule } from 'src/features/users/users.module';
import { User } from 'src/features/users/user.model';
import { Type } from 'src/features/types/type.model';
import { Article } from 'src/features/articles/article.model';
import { UserArticle } from 'src/features/user-article/user-article.model';
import { Team } from 'src/features/team/team.model';
import { UserTeam } from 'src/features/user-team/user-team.model';
import { Right } from 'src/features/rights/right.model';
import { AuthModule } from 'src/features/auth/auth.module';
import { MailModule } from 'src/features/mail/mail.module';
import { ArticleModule } from '../articles/article.module';
import { AuthGuard } from 'src/features/auth/auth.guard';
import { Dialect } from 'sequelize';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: process.env.DEV_DB_DIALECT as Dialect,
      host: process.env.DEV_DB_HOST,
      port: parseInt(process.env.DEV_DB_PORT),
      username: process.env.DEV_DB_USER,
      password: process.env.DEV_DB_PASSWORD,
      database: process.env.DEV_DB_NAME,
      dialectOptions: {
        ssl: {
          require: true, // This will help you. But you will see nwe error
          rejectUnauthorized: false, // This line will fix new error
        },
      },
      models: [User, Type, Article, UserArticle, Team, UserTeam, Right],
      synchronize: true,
      autoLoadModels: true,
    }),
    UsersModule,
    AuthModule,
    MailModule,
    ArticleModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'APP_GUARD',
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
