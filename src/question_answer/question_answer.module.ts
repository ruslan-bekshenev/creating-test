import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from 'src/question/question.entity';
import { QuestionAnswer } from './question_answer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Question, QuestionAnswer])],
  providers: [],
  controllers: [],
})
export class QuestionAnswerModule {}
