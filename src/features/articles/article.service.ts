import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Article } from './article.model';
import { CreateArticleDto } from './dto/create-article.dto';

@Injectable()
export class ArticleServices {
  constructor(
    @InjectModel(Article)
    private articleModel: typeof Article,
  ) {}

  async getAll(): Promise<Article[]> {
    return await this.articleModel.findAll();
  }

  async createArticle(createArticleDto: CreateArticleDto): Promise<Article> {
    try {
      return await this.articleModel.create({
        ...createArticleDto,
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
