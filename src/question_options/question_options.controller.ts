import { Body, Controller, Post } from '@nestjs/common';
import { CreateQuestionOptionsDto } from './dto/create-question-options.dto';
import { QuestionOptionsService } from './question_options.service';

@Controller('question-options')
export class QuestionOptionsController {
  constructor(private questionOptionsService: QuestionOptionsService) {}

  @Post()
  create(@Body() createQuestionOptionsDto: CreateQuestionOptionsDto) {
    return this.questionOptionsService.create(createQuestionOptionsDto);
  }
}
