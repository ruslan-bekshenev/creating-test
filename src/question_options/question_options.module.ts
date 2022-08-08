import { Module } from '@nestjs/common';
import { QuestionOptionsController } from './question_options.controller';

@Module({
  controllers: [QuestionOptionsController]
})
export class QuestionOptionsModule {}
