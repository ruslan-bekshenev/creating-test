import { QuestionAnswer } from 'src/question_answer/question_answer.entity';
import { QuestionOptions } from 'src/question_options/question_options.entity';
import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
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
}
