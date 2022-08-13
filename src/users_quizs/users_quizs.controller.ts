import { Body, Controller, Post } from '@nestjs/common';
import { CreateUsersQuizsDto } from './dto/create-users-quizs.dto';
import { UsersQuizsService } from './users_quizs.service';

@Controller('users-quizs')
export class UsersQuizsController {
  constructor(private usersQuizsService: UsersQuizsService) {}

  @Post()
  create(@Body() createUsersQuizs: CreateUsersQuizsDto) {
    return this.usersQuizsService.create(createUsersQuizs);
  }
}
