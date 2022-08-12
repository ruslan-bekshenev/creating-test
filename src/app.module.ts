import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './config/config.service';
import { QuestionModule } from './question/question.module';
import { QuestionOptionsModule } from './question_options/question_options.module';
import { QuestionAnswerModule } from './question_answer/question_answer.module';
import { QuizModule } from './quiz/quiz.module';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { UsersQuizsController } from './users_quizs/users_quizs.controller';
import { UsersQuizsService } from './users_quizs/users_quizs.service';
import { UsersQuizsModule } from './users_quizs/users_quizs.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    QuestionModule,
    QuestionOptionsModule,
    QuestionAnswerModule,
    QuizModule,
    UserModule,
    UsersQuizsModule,
  ],
  controllers: [UserController, UsersQuizsController],
  providers: [UserService, UsersQuizsService],
})
export class AppModule {}
