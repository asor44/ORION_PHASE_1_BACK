import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Right } from '../rights/right.model';
import { User } from '../users/user.model';

@Table({ tableName: 'users-rights' })
export class UserRight extends Model {
  @ForeignKey(() => User)
  @Column
  userId: number;

  @ForeignKey(() => Right)
  @Column
  right: string;
}
