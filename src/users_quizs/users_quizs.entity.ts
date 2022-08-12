import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../user/user.entity';
import { Quiz } from '../quiz/quiz.entity';

@Entity()
export class UsersQuizs {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, (user) => user.userQuizs)
  user: User;

  @ManyToOne(() => Quiz, (quiz) => quiz.quizUsers)
  quiz: Quiz;
}
