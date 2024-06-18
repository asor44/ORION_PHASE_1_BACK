import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class UpdateArticleDto {
  id: number;
  title: string;
  author: string;
  content: string;
  approvers: string;
  isApproved: boolean;
  isDeleted: boolean;
  isActive: boolean;
  attachement: string;
}
