import { BelongsTo, Column, Model, Table } from 'sequelize-typescript';
import { Type } from '../type/type.model';

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
  @BelongsTo(() => Type)
  type: Type;

  @Column
  army: string;

  @Column
  rank: string;

  @Column({ defaultValue: false })
  cotisation: boolean;

  @Column
  rights: string;

  @Column
  equipement: string;

  @Column({ defaultValue: false })
  isActive: boolean;

  @Column
  team: string;

  @Column({ defaultValue: false })
  isDeleted: boolean;
}
