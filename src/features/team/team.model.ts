import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { UserTeam } from 'src/features/user-team/user-team.model';

@Table({ tableName: 'team' })
export class Team extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  name: string;

  @HasMany(() => UserTeam, 'teamId')
  users: UserTeam[];

  @Column
  right: string;

  @Column({ defaultValue: false })
  isDeleted: boolean;
}
