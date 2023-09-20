import { Column, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'rights' })
export class Right extends Model {
  @Column
  superAdmin: string;

  @Column
  admin: string;

  @Column
  parent: string;

  @Column
  member: string;

  @Column
  amc: string;

  @Column
  cdt: string;

  @Column
  management: string;

  @Column
  shop: string;

  @Column
  accounting: string;

  @Column
  article: string;

  @Column
  codir: string;

  @Column
  stockInf: string;

  @Column
  it: string;
}
