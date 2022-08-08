import { Module } from '@nestjs/common';
import { QuestionAnswerService } from './question_answer.service';
import { QuestionAnswerController } from './question_answer.controller';

@Module({
  providers: [QuestionAnswerService],
  controllers: [QuestionAnswerController],
})
export class QuestionAnswerModule {}
