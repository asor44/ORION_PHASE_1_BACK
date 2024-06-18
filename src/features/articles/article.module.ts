import { SequelizeModule } from '@nestjs/sequelize';
import { Article } from './article.model';
import { ArticleServices } from './article.service';
import { Module } from '@nestjs/common';
import { ArticleController } from './article.controller';

@Module({
  imports: [SequelizeModule.forFeature([Article])],
  providers: [ArticleServices],
  controllers: [ArticleController],
  // exports: [SequelizeModule],
})
export class ArticleModule {}
