import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from 'src/features/users/user.model';
import { Team } from 'src/features/team/team.model';

@Table({ tableName: 'user-team' })
export class UserTeam extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @ForeignKey(() => Team)
  @Column
  teamId: number;
}
