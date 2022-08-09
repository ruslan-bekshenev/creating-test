import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { QuestionAnswer } from './question_answer.entity';

@Injectable()
export class QuestionAnswerService {
  constructor(
    @InjectRepository(QuestionAnswer)
    private questionAnswerRepository: Repository<QuestionAnswer>,
  ) {}
  
}
