import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from 'src/question/question.entity';
import { QuestionOptions } from './question_options.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Question, QuestionOptions])],
  controllers: [],
  providers: [],
})
export class QuestionOptionsModule {}
