import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { QuestionService } from './question.service';

@Controller('question')
export class QuestionController {
  constructor(private questionService: QuestionService) {}

  @Post()
  create(@Body() createQuestionDto: CreateQuestionDto) {
    return this.questionService.create(createQuestionDto);
  }

  @Get('/:quizId')
  getListByQuiz(@Param('quizId') quizId) {
    return this.questionService.getListByQuiz(quizId);
  }
}
