import { Column, Model, Table, ForeignKey } from 'sequelize-typescript';
import { User } from 'src/features/users/user.model';
import { Article } from 'src/features/articles/article.model';

@Table({ tableName: 'user-article' })
export class UserArticle extends Model {
  @ForeignKey(() => User)
  @Column
  userId: number;

  @ForeignKey(() => Article)
  @Column
  articleId: number;
}
