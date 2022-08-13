import { Question } from 'src/question/question.entity';
import { User } from 'src/user/user.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UsersQuizs } from '../users_quizs/users_quizs.entity';

@Entity()
export class Quiz {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: true })
  timer: number;

  @OneToMany(() => Question, (question) => question.id)
  questions: Question[];

  @OneToMany(() => UsersQuizs, (quizUsers) => quizUsers.quiz)
  quizUsers: UsersQuizs[];

  @ManyToOne(() => User, (user) => user.id)
  userСreator: User;
}
