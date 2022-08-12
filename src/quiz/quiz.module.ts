import { Module } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { QuizController } from './quiz.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from 'src/question/question.entity';
import { Quiz } from './quiz.entity';
import { UsersQuizs } from '../users_quizs/users_quizs.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Question, Quiz, UsersQuizs])],
  providers: [QuizService],
  controllers: [QuizController],
})
export class QuizModule {}
