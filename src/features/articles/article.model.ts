import { Column, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'articles' })
export class Article extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  title: string;

  @Column
  author: string;

  @Column
  content: string;

  @Column
  approvers: string;

  @Column({ defaultValue: false })
  isApproved: boolean;

  @Column({ defaultValue: false })
  isDeleted: boolean;

  @Column({ defaultValue: false })
  isActive: boolean;

  @Column
  attachment: string;
}
