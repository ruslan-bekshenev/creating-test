import { Question } from '../question/question.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class QuestionAnswer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  answer: string;

  @ManyToOne(() => Question, (question) => question.question)
  question: Question;
}
