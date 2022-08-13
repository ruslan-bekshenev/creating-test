import { Quiz } from 'src/quiz/quiz.entity';
import { User } from 'src/user/user.entity';

export class CreateUsersQuizsDto {
  user: User;
  quiz: Quiz;
  created_at: Date;
  finish_at?: Date;
}
