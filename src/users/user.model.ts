import { Column, HasMany, HasOne, Model, Table } from 'sequelize-typescript';
import { Type } from '../types/type.model';
import { Right } from '../rights/right.model';
import { UserTeam } from 'src/user-team/user-team.model';

@Table({ tableName: 'users' })
export class User extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  identifiant: string;

  // @Column
  // firstName: string;

  // @Column
  // lastName: string;

  @Column
  email: string;

  // @Column
  // phone: string;

  @Column
  password: string;

  // @Column
  // city: string;

  // @Column
  // postalCode: string;

  // @Column
  // Type: string;

  // @HasOne(() => Type, 'userId')
  // type: Type;

  // @Column
  // army: string;

  // @Column
  // rank: string;

  // @Column({ defaultValue: false })
  // cotisation: boolean;

  // @Column
  // Rights: string;

  // @HasMany(() => Right, 'userId')
  // rights: Right[];

  // @Column
  // equipment: string;

  // @Column({ defaultValue: false })
  // isActive: boolean;

  // @HasOne(() => UserTeam, 'userId')
  // team: UserTeam;

  // @Column({ defaultValue: false })
  // isDeleted: boolean;
}
