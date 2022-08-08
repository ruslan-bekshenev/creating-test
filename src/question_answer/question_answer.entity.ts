import { Question } from 'src/question/question.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class QuestionAnswer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  answer: string;

  @OneToOne(() => Question, (question) => question.question)
  question: Question;
}
