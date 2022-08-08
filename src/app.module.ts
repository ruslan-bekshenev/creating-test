import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './config/config.service';
import { QuestionModule } from './question/question.module';
import { QuestionOptionsService } from './question_options/question_options.service';
import { QuestionOptionsModule } from './question_options/question_options.module';
import { QustionAnswerModule } from './qustion_answer/qustion_answer.module';
import { QuestionAnswerModule } from './question_answer/question_answer.module';

@Module({
  imports: [TypeOrmModule.forRoot(configService.getTypeOrmConfig()), QuestionModule, QuestionOptionsModule, QustionAnswerModule, QuestionAnswerModule],
  controllers: [],
  providers: [QuestionOptionsService],
})
export class AppModule {}
