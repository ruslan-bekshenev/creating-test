import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UsersQuizs } from '../users_quizs/users_quizs.entity';
import { RefreshToken } from './refreshtoken.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ nullable: false })
  password: string;

  @OneToMany(
    () => RefreshToken,
    (refreshToken: RefreshToken) => refreshToken.user,
  )
  refreshTokens: RefreshToken[];

  @OneToMany(() => UsersQuizs, (userQuizs) => userQuizs.user)
  userQuizs: UsersQuizs[];
}
