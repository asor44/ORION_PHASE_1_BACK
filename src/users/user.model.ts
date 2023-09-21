import { Column, HasMany, HasOne, Model, Table } from 'sequelize-typescript';
import { Type } from '../types/type.model';
import { Right } from '../rights/right.model';
import { UserTeam } from 'src/user-team/user-team.model';

@Table({ tableName: 'users' })
export class User extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  email: string;

  @Column
  phone: string;

  @Column
  password: string;

  @Column
  city: string;

  @Column
  postalCode: number;

  @Column
  typeId: number;

  @HasOne(() => Type, 'userId')
  type: Type;

  @Column
  army: string;

  @Column
  rank: string;

  @Column({ defaultValue: false })
  cotisation: boolean;

  @HasMany(() => Right, 'userId')
  rights: Right[];

  @Column
  equipement: string;

  @Column({ defaultValue: false })
  isActive: boolean;

  @HasOne(() => UserTeam, 'userId')
  team: UserTeam;

  @Column({ defaultValue: false })
  isDeleted: boolean;
}
