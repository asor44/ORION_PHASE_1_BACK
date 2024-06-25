import { Body, Controller, Get, Post } from '@nestjs/common';
import { ArticleServices } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { Article } from './article.model';

@Controller('article')
export class ArticleController {
  constructor(private readonly articleServices: ArticleServices) {}

  @Get()
  async getAll(): Promise<Article[]> {
    return await this.articleServices.getAll();
  }

  @Post()
  async createArticle(
    @Body() createArticleDto: CreateArticleDto,
  ): Promise<Article> {
    return await this.articleServices.createArticle(createArticleDto);
  }
}
