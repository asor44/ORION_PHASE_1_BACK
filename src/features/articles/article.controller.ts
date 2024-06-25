import { Body, Controller, Get, Post } from '@nestjs/common';
import { ArticleServices } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { Article } from './article.model';
import { Public } from '../../core/decorator/public.decorator';

@Controller('article')
export class ArticleController {
  constructor(private readonly articleServices: ArticleServices) {}

  @Public()
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
