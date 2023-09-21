import { Column, Model, Table, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: 'ticket' })
export class Ticket extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  title: string;

  @Column
  content: string;

  @Column
  priority: string;

  @Column
  author: string;

  @Column({ defaultValue: false })
  isdeleted: boolean;

  @Column
  teamsAccess: string;

  @Column
  resolutionDate: Date;

  @Column
  pickUpDate: Date;

  @Column
  solution: string;

  @Column
  response: string;

  @Column
  status: string;
}
