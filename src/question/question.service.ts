import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQuestionDto } from './dto/create-question.dto';
import { Question } from './question.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private questionRepository: Repository<Question>,
  ) {}

  async create(createQuestionDto: CreateQuestionDto) {
    try {
      const { question } = createQuestionDto;

      const questionObj = this.questionRepository.create({ question });

      await this.questionRepository.save(questionObj);

      return questionObj;
    } catch (e) {
      console.log(e);
    }
  }

  getList() {
    return this.questionRepository.find();
  }
}
