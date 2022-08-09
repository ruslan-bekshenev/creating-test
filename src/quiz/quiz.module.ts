import { Module } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { QuizController } from './quiz.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from 'src/question/question.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Question])],
  providers: [QuizService],
  controllers: [QuizController],
})
export class QuizModule {}
