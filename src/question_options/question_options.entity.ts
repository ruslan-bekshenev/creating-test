import { Question } from 'src/question/question.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class QuestionOptions {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  option: string;

  @ManyToOne(() => Question, (question) => question.options)
  question: Question;
}
