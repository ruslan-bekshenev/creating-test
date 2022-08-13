import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './config/config.service';
import { QuestionModule } from './question/question.module';
import { QuestionOptionsModule } from './question_options/question_options.module';
import { QuestionAnswerModule } from './question_answer/question_answer.module';
import { QuizModule } from './quiz/quiz.module';
import { UserModule } from './user/user.module';
import { UsersQuizsModule } from './users_quizs/users_quizs.module';
import { AuthModule } from './user/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    QuestionModule,
    QuestionOptionsModule,
    QuestionAnswerModule,
    QuizModule,
    UserModule,
    UsersQuizsModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
