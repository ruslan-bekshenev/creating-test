import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateUsersQuizsDto } from './dto/create-users-quizs.dto';
import { UsersQuizsService } from './users_quizs.service';

@Controller('users-quizs')
export class UsersQuizsController {
  constructor(private usersQuizsService: UsersQuizsService) {}

  @Post()
  create(@Body() createUsersQuizs: CreateUsersQuizsDto) {
    return this.usersQuizsService.create(createUsersQuizs);
  }

  @Get('/:userId')
  getQuizesByUser(
    @Param('userId') userId,
    @Query('page') page: number,
    @Query('count') count: number,
  ) {
    return this.usersQuizsService.getQuizesByUser(userId, page, count);
  }

  @Get('/:quizId')
  getUsersByQuiz(
    @Param('quizId') quizId,
    @Query('page') page: number,
    @Query('count') count: number,
  ) {
    return this.usersQuizsService.getUsersByQuiz(quizId, page, count);
  }
}
