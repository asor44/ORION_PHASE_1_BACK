import {
  BelongsToMany,
  Column,
  HasOne,
  Model,
  Table,
} from 'sequelize-typescript';
import { Right } from '../rights/right.model';
import { UserRight } from '../users-rights/users-rights.model';

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

  @Column
  birthdate: Date;

  @Column
  city: string;

  @Column
  address: string;

  @Column
  phonenumber: number;

  @Column
  postalCode: string;

  @Column
  country: string;

  @Column
  army: string;

  @Column
  reserve: boolean;

  @Column
  nid: number;

  @Column
  grade: string;

  @Column
  poste: string;

  @Column({ defaultValue: false })
  cotisation: boolean;

  @Column({ defaultValue: false })
  member: boolean;

  @BelongsToMany(() => Right, () => UserRight)
  right: Right;

  // @Column({ defaultValue: false })
  // isActive: boolean;

  // @Column({ defaultValue: false })
  // isDeleted: boolean;
}
