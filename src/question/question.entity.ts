import { QuestionAnswer } from 'src/question_answer/question_answer.entity';
import { QuestionOptions } from 'src/question_options/question_options.entity';
import { Quiz } from 'src/quiz/quiz.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Question {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  question: string;

  @OneToMany(() => QuestionOptions, (options) => options.question, {
    cascade: true,
  })
  options: QuestionOptions[];

  @OneToMany(() => QuestionAnswer, (answer) => answer.answer, { cascade: true })
  answer: QuestionAnswer[];

  @ManyToOne(() => Quiz, (quiz) => quiz.id, { nullable: false })
  quiz: Quiz;
}
