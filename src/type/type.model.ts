import { Column, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'type' })
export class Type extends Model {
  @Column
  reserve: string;

  @Column
  active: string;

  @Column
  civile: string;
}
