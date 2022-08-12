import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from './user.entity';
import { UsersQuizs } from '../users_quizs/users_quizs.entity';

@Module({
  imports: [User, UsersQuizs],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
