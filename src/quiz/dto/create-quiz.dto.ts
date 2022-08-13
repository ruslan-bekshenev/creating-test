import { IsString } from 'class-validator';

export class CreateQuizDto {
  @IsString()
  name: string;

  finishDate?: Date;
}
