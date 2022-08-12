import { Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../user/user.entity';
import { Quiz } from '../quiz/quiz.entity';

@Entity()
export class UsersQuizs {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, (user) => user.userQuizs)
  @JoinTable({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Quiz, (quiz) => quiz.quizUsers)
  @JoinTable({ name: 'quid_id' })
  quiz: Quiz;
}