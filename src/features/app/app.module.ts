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
    ArticleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
