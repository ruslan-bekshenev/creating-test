import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quiz } from 'src/quiz/quiz.entity';
import { User } from 'src/user/user.entity';
import { UsersQuizsController } from './users_quizs.controller';
import { UsersQuizs } from './users_quizs.entity';
import { UsersQuizsService } from './users_quizs.service';

@Module({
  imports: [TypeOrmModule.forFeature([UsersQuizs, User, Quiz])],
  providers: [UsersQuizsService],
  controllers: [UsersQuizsController],
})
export class UsersQuizsModule {}
