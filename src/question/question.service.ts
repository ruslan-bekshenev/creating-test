import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuestionAnswer } from 'src/question_answer/question_answer.entity';
import { QuestionOptions } from 'src/question_options/question_options.entity';
import { Repository } from 'typeorm';
import { CreateQuestionDto } from './dto/create-question.dto';
import { Question } from './question.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private questionRepository: Repository<Question>,
    @InjectRepository(QuestionOptions)
    private questionOptionsRepository: Repository<QuestionOptions>,
    @InjectRepository(QuestionAnswer)
    private questionAnswerRepository: Repository<QuestionAnswer>,
  ) {}

  async create(createQuestionDto: CreateQuestionDto) {
    try {
      const { question, answer, options, quiz } = createQuestionDto;
      const questionObj = this.questionRepository.create({ question });

      await this.questionRepository.save(questionObj);
      const optionsArray: QuestionOptions[] = [];
      for (let i = 0; i < options.length; i++) {
        const optionObj = this.questionOptionsRepository.create({
          option: options[i],
          question: questionObj,
        });

        await this.questionOptionsRepository.save(optionObj);

        optionsArray.push(optionObj);
      }

      const answerObj: QuestionAnswer = this.questionAnswerRepository.create({
        answer: optionsArray[answer].option,
        question: questionObj,
      });

      await this.questionAnswerRepository.save(answerObj);

      return {
        question: {
          ...questionObj,
          answer: {
            id: answerObj.id,
            value: answerObj.answer,
          },
          options: optionsArray.map((option) => ({
            id: option.id,
            value: option.option,
          })),
        },
      };
    } catch (e) {
      console.log(e);
    }
  }

  getListByQuiz(quizId: string) {
    console.log(quizId);
    return this.questionRepository.find();
  }
}
