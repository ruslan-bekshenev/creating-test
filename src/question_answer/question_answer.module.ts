import { Module } from '@nestjs/common';
import { QuestionAnswerService } from './question_answer.service';
import { QuestionAnswerController } from './question_answer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from 'src/question/question.entity';
import { QuestionAnswer } from './question_answer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Question, QuestionAnswer])],
  providers: [QuestionAnswerService],
  controllers: [QuestionAnswerController],
})
export class QuestionAnswerModule {}
