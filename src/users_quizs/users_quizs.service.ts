import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Quiz } from 'src/quiz/quiz.entity';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';
import { CreateUsersQuizsDto } from './dto/create-users-quizs.dto';
import { UsersQuizs } from './users_quizs.entity';
import dayjs from 'dayjs';
@Injectable()
export class UsersQuizsService {
  constructor(
    @InjectRepository(UsersQuizs)
    private usersQuizsRepository: Repository<UsersQuizs>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Quiz)
    private quizRepository: Repository<Quiz>,
  ) {}

  async create(createUsersQuizsDto: CreateUsersQuizsDto) {
    const { quizId, userId } = createUsersQuizsDto;
    const quizObj = await this.quizRepository.findOneBy({ id: quizId });
    const userObj = await this.userRepository.findOneBy({ id: userId });
    const createdAt = dayjs().toISOString();
    const userQuiz = this.usersQuizsRepository.create({
      quiz: quizObj,
      user: userObj,
      created_at: createdAt,
    });

    await this.usersQuizsRepository.save(userQuiz);

    return userQuiz;
  }

  async getList(userId: string) {
    const user = await this.userRepository.findBy({ id: userId });
    const quizes = await this.usersQuizsRepository.findBy({ user });
    console.log(quizes);
    return quizes;
  }
}
