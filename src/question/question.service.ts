import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuestionAnswer } from 'src/question_answer/question_answer.entity';
import { QuestionOptions } from 'src/question_options/question_options.entity';
import { Quiz } from 'src/quiz/quiz.entity';
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
    @InjectRepository(Quiz)
    private quizRepository: Repository<Quiz>,
  ) {}

  async create(quizId: string, createQuestionDto: CreateQuestionDto) {
    const { question, answer, options } = createQuestionDto;

    const quizObj = await this.quizRepository.findOneBy({ id: quizId });

    const questionObj = this.questionRepository.create({
      question,
      quiz: quizObj,
    });

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
        id: questionObj.id,
        value: questionObj.question,
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
  }

  async getListByQuiz(quizId: string) {
    const quiz = await this.quizRepository.findOneBy({ id: quizId });
    return this.questionRepository.findBy({ quiz });
  }
}
