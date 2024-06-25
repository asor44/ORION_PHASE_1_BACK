import { Column, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'users' })
export class User extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  firstname: string;

  @Column
  lastname: string;

  @Column
  email: string;

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
