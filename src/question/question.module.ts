import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionAnswer } from 'src/question_answer/question_answer.entity';
import { QuestionOptions } from 'src/question_options/question_options.entity';
import { QuestionController } from './question.controller';
import { Question } from './question.entity';
import { QuestionService } from './question.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([QuestionOptions, QuestionAnswer, Question]),
  ],
  controllers: [QuestionController],
  providers: [QuestionService],
})
export class QuestionModule {}
