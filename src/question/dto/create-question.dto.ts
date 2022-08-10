import { IsNumber, IsString } from 'class-validator';
import { QuestionOptions } from 'src/question_options/question_options.entity';

export class CreateQuestionDto {
  @IsString()
  question: string;

  options: string[];

  @IsNumber()
  answer: number;

  @IsString()
  quiz: string;
}
