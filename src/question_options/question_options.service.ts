import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQuestionOptionsDto } from './dto/create-question-options.dto';
import { QuestionOptions } from './question_options.entity';

@Injectable()
export class QuestionOptionsService {
  constructor(
    @InjectRepository(QuestionOptions)
    private questionOptionRepository: Repository<QuestionOptions>,
  ) {}

  async create(createQuestionOptionsDto: CreateQuestionOptionsDto) {
    const { option, question } = createQuestionOptionsDto;

    const optionObj = this.questionOptionRepository.create({
      question,
      option,
    });

    await this.questionOptionRepository.save(optionObj);

    return optionObj;
  }
}
