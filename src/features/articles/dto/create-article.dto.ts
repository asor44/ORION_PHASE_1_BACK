import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateArticleDto {
  id: number;
  @IsString()
  @IsNotEmpty()
  title: string;
  @IsString()
  @IsNotEmpty()
  author: string;
  @IsString()
  @IsNotEmpty()
  content: string;
  @IsString()
  approvers: string;
  @IsBoolean()
  @IsNotEmpty()
  isApproved: boolean;
  @IsBoolean()
  @IsNotEmpty()
  isDeleted: boolean;
  @IsBoolean()
  @IsNotEmpty()
  isActive: boolean;
  @IsString()
  attachement: string;
}
