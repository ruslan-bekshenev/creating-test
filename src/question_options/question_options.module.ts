import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from 'src/question/question.entity';
import { QuestionOptionsController } from './question_options.controller';
import { QuestionOptions } from './question_options.entity';
import { QuestionOptionsService } from './question_options.service';

@Module({
  imports: [TypeOrmModule.forFeature([Question, QuestionOptions])],
  controllers: [QuestionOptionsController],
  providers: [QuestionOptionsService],
})
export class QuestionOptionsModule {}
