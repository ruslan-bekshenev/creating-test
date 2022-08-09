import { Question } from 'src/question/question.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Quiz {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column()
  timer: number;

  @OneToMany(() => Question, (question) => question.id)
  questions: Question[];
}
