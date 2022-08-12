import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UsersQuizs } from '../users_quizs/users_quizs.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @OneToMany(() => UsersQuizs, (userQuizs) => userQuizs.user)
  userQuizs: UsersQuizs[];
}
