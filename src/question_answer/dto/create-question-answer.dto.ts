import { IsString } from 'class-validator';

export class CreateQuestionAnswerDto {
  @IsString()
  question: string;

  @IsString()
  answer: string;
}
