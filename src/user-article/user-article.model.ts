import { Column, Model, Table, ForeignKey } from 'sequelize-typescript';
import { User } from '../users/user.model';
import { Article } from '../articles/article.model';

@Table({ tableName: 'user-article' })
export class UserArticle extends Model {
  @ForeignKey(() => User)
  @Column
  userId: number;

  @ForeignKey(() => Article)
  @Column
  articleId: number;
}
