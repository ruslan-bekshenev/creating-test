import { Quiz } from 'src/quiz/quiz.entity';
import { User } from 'src/user/user.entity';

export class CreateUsersQuizsDto {
  userId: string;
  quizId: string;
  finishAt?: Date;
}
