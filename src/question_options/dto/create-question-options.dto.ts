import { IsString } from 'class-validator';
import { Question } from 'src/question/question.entity';

export class CreateQuestionOptionsDto {
  @IsString()
  option: string;

  question: Question;
}
